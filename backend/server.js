import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

const app = express();

// --- CORS setup ---
const allowedOrigins = [
  process.env.CLIENT_ORIGIN, // Production (from .env)
  "http://localhost:5173",   // Vite dev server
  "http://localhost:3000",   // CRA dev server
  "http://localhost:3002"    // Any extra local frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("❌ Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json()); // for parsing JSON

// --- MongoDB connection ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Routes ---
app.use("/api/blogs", blogRoutes);

// --- Health check ---
app.get("/", (req, res) => res.send("🚀 Blog API running with Cloudinary"));

// --- Start server ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
