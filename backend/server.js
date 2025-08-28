import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (no deprecated options needed)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

export default app;
