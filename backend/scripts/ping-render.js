#!/usr/bin/env node

/**
 * ping-render.js
 * Script to wake up and keep Render backend services awake.
 *
 * Usage:
 *   node scripts/ping-render.js [URL] [--continuous] [--interval <minutes>]
 *
 * Examples:
 *   node scripts/ping-render.js
 *   node scripts/ping-render.js https://yritsolutions.onrender.com
 *   node scripts/ping-render.js --continuous --interval 10
 */

const DEFAULT_URL = process.env.RENDER_URL || process.env.BACKEND_URL || "https://yritsolutions.onrender.com";
const TIMEOUT_MS = parseInt(process.env.PING_TIMEOUT_MS || "70000", 10); // 70s for cold starts
const MAX_RETRIES = 3;

// Parse CLI flags
const args = process.argv.slice(2);
let targetUrl = DEFAULT_URL;
let isContinuous = false;
let intervalMinutes = 10;

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === "--continuous" || arg === "-c" || arg === "--loop") {
    isContinuous = true;
  } else if (arg === "--interval" || arg === "-i") {
    const val = parseInt(args[i + 1], 10);
    if (!isNaN(val) && val > 0) {
      intervalMinutes = val;
      i++;
    }
  } else if (!arg.startsWith("-")) {
    targetUrl = arg;
  }
}

// Clean base URL (remove trailing slash)
targetUrl = targetUrl.replace(/\/+$/, "");

const endpointsToTest = [
  `${targetUrl}/health`,
  `${targetUrl}/`,
];

function log(msg) {
  const time = new Date().toISOString().replace("T", " ").substring(0, 19);
  console.log(`[${time}] ${msg}`);
}

async function pingEndpoint(url) {
  const start = Date.now();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      headers: {
        "User-Agent": "YR-IT-RenderKeepAlive/1.0",
        "Accept": "*/*",
      },
    });
    clearTimeout(timeoutId);

    const duration = ((Date.now() - start) / 1000).toFixed(2);
    const text = await response.text();
    const preview = text.substring(0, 120).replace(/\s+/g, " ").trim();

    return {
      success: response.ok,
      status: response.status,
      duration,
      preview,
    };
  } catch (error) {
    clearTimeout(timeoutId);
    const duration = ((Date.now() - start) / 1000).toFixed(2);
    const isTimeout = error.name === "AbortError" || error.message.includes("aborted");
    return {
      success: false,
      status: isTimeout ? "TIMEOUT" : "ERROR",
      duration,
      error: error.message,
    };
  }
}

async function runPing() {
  log(`Pinging Render service: ${targetUrl}`);

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    if (attempt > 1) {
      const backoffSec = attempt * 5;
      log(`Waiting ${backoffSec}s before retry ${attempt}/${MAX_RETRIES}...`);
      await new Promise((res) => setTimeout(res, backoffSec * 1000));
    }

    // Try endpoints in order (/health first, then / root)
    for (const endpoint of endpointsToTest) {
      log(`Calling ${endpoint} (Attempt ${attempt}/${MAX_RETRIES}, timeout: ${TIMEOUT_MS / 1000}s)...`);
      const res = await pingEndpoint(endpoint);

      if (res.success) {
        log(`✅ SUCCESS! ${endpoint} responded with status ${res.status} in ${res.duration}s`);
        if (res.preview) {
          log(`   Response: "${res.preview}"`);
        }
        return true;
      }

      if (res.status === 404) {
        log(`ℹ️  ${endpoint} returned 404 (Route not implemented yet), testing alternate endpoint...`);
        continue;
      }

      log(`⚠️  ${endpoint} returned ${res.status} in ${res.duration}s: ${res.error || res.preview || "Request failed"}`);
    }
  }

  log(`❌ All ping attempts failed for ${targetUrl}`);
  return false;
}

async function main() {
  log("Starting Render Keep-Alive script...");
  log(`Target: ${targetUrl}`);

  if (isContinuous) {
    log(`Running in continuous mode. Interval: every ${intervalMinutes} minutes.`);
    await runPing();
    setInterval(async () => {
      await runPing();
    }, intervalMinutes * 60 * 1000);
  } else {
    const success = await runPing();
    if (!success) {
      process.exit(1);
    }
  }
}

main();
