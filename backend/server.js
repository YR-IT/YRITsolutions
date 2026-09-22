import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import blogRoutes from "./routes/blogRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

// --- Fail fast on missing required env vars ---
const requiredEnvVars = [
  "MONGO_URI",
  "JWT_SECRET",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];
const missing = requiredEnvVars.filter((key) => !process.env[key]);
if (missing.length > 0) {
  console.error(`❌ Missing required environment variables: ${missing.join(", ")}`);
  console.error("   Copy .env.example to .env and fill in the values.");
  process.exit(1);
}

const app = express();

// --- CORS setup ---
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:3000,http://localhost:5173,http://127.0.0.1:3000,http://127.0.0.1:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("❌ Not allowed by CORS: " + origin));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// --- MongoDB connection ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// --- Routes ---
app.use("/api/auth", authRoutes);
app.use("/api/product", blogRoutes);
app.use("/api/product", portfolioRoutes);
app.use("/api/product", careerRoutes);
app.use("/api/contact", contactRoutes);

// --- Health check ---
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));
app.get("/", (req, res) => res.send("🚀 YR-IT Solutions API is running"));

// --- 404 handler ---
app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
});

// --- Central error handler (e.g. multer file-size errors, CORS errors) ---
app.use((err, req, res, next) => {
  console.error("❌ Unhandled error:", err.message);
  res.status(err.status || 500).json({ message: err.message || "Something went wrong" });
});

// --- Start server ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
