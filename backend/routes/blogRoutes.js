import express from "express";
import multer from "multer";
import Blog from "../models/blog.js";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

const router = express.Router();
const upload = multer(); // memory storage

// ✅ Create Blog
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, author, content } = req.body;
    if (!title || !author || !content) {
      return res.status(400).json({ error: "Title, author, and content are required" });
    }

    let imageUrl = null;

    if (req.file) {
      const streamUpload = (fileBuffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "blogs" },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          streamifier.createReadStream(fileBuffer).pipe(stream);
        });
      };

      const result = await streamUpload(req.file.buffer);
      imageUrl = result.secure_url;
    }

    const blog = new Blog({ title, author, content, image: imageUrl });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    console.error("❌ Error creating blog:", err);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

// ✅ Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("❌ Error fetching blogs:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

export default router;
