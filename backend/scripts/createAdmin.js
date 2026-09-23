/**
 * One-off script to create your first admin login.
 *
 * Usage:
 *   node scripts/createAdmin.js you@example.com yourPassword123
 */
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

dotenv.config();

const [, , email, password] = process.argv;

if (!email || !password) {
  console.error("Usage: node scripts/createAdmin.js <email> <password>");
  process.exit(1);
}

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not set. Copy .env.example to .env and fill it in first.");
  process.exit(1);
}

try {
  const dbName = process.env.DB_NAME || "yr_it";
  await mongoose.connect(process.env.MONGO_URI, { dbName });
  console.log(`✅ Connected to MongoDB (Database: ${mongoose.connection.name})`);

  const existing = await Admin.findOne({ email: email.toLowerCase().trim() });
  if (existing) {
    console.log(`⚠️  An admin with email "${email}" already exists. No changes made.`);
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = new Admin({ email: email.toLowerCase().trim(), password: hashedPassword });
  await admin.save();

  console.log(`✅ Admin created: ${admin.email}`);
  console.log("   You can now log in from the frontend's /login page with this email/password.");
  process.exit(0);
} catch (err) {
  console.error("❌ Failed to create admin:", err.message);
  process.exit(1);
}
