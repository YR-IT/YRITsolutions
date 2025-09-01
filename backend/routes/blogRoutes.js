import express from "express";
import multer from "multer";
import Blog from "../models/blog.js";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Upload helper
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blogs" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
    stream.end(fileBuffer);
  });
};

// ✅ Create Blog
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("📥 Incoming body:", req.body);
    console.log("📸 Incoming file:", req.file?.originalname);

    const { title, author, content } = req.body;
    if (!title || !author || !content) {
      console.log("❌ Missing required fields");
      return res.status(400).json({
        error: "Title, author, and content are required",
      });
    }

    let imageUrl = null;
    if (req.file) {
      try {
        const result = await uploadToCloudinary(req.file.buffer);
        imageUrl = result.secure_url;
        console.log("✅ Uploaded to Cloudinary:", imageUrl);
      } catch (cloudErr) {
        console.error("❌ Cloudinary upload error:", cloudErr);
        return res.status(500).json({
          error: "Cloudinary upload failed",
          details: cloudErr.message,
        });
      }
    }

    const blog = new Blog({ title, author, content, image: imageUrl });
    console.log("💾 Attempting to save blog:", blog);

    const savedBlog = await blog.save();
    console.log("✅ Blog saved:", savedBlog);

    return res.status(201).json(savedBlog);
  } catch (err) {
    console.error("❌ Blog save error:", err);
    return res.status(500).json({
      error: "Failed to create blog",
      details: err.message || err,
    });
  }
});

export default router;
