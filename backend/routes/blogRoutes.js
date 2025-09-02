// routes/blogRoutes.js
import express from "express";
import multer from "multer";
import Blog from "../models/blog.js";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

const router = express.Router();

/* ============================
   ✅ Cloudinary Config
============================ */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ============================
   ✅ Multer Setup
============================ */
const storage = multer.memoryStorage();
const upload = multer({ storage });

/* ============================
   📌 Helper: Upload to Cloudinary
============================ */
const uploadToCloudinary = (fileBuffer, folder = "blogs") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

/* ============================
   📌 Create Blog
============================ */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      imageUrl = result.secure_url;
    }

    const newBlog = new Blog({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      image: imageUrl,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("❌ Failed to create blog:", error);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

/* ============================
   📌 Get All Blogs
============================ */
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error("❌ Failed to fetch blogs:", error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

/* ============================
   📌 Get Single Blog
============================ */
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    console.error("❌ Failed to fetch blog:", error);
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

/* ============================
   📌 Update Blog
============================ */
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let updateData = {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
    };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      updateData.image = result.secure_url;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(updatedBlog);
  } catch (error) {
    console.error("❌ Failed to update blog:", error);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

/* ============================
   📌 Delete Blog
============================ */
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("❌ Failed to delete blog:", error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

export default router;
