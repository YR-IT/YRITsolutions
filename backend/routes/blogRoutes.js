import express from "express";
import multer from "multer";
import Blog from "../models/blog.js";
import requireAuth from "../middleware/auth.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB, matches frontend validation

/* ============================================================
   GET /api/product/getblogs — list all blogs (public)
============================================================ */
router.get("/getblogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error("❌ Failed to fetch blogs:", error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

/* ============================================================
   GET /api/product/getblog/:id — single blog (public)
============================================================ */
router.get("/getblog/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    console.error("❌ Failed to fetch blog:", error);
    res.status(500).json({ message: "Failed to fetch blog" });
  }
});

/* ============================================================
   POST /api/product/addblogs — create blog (protected)
   Accepts EITHER:
   - JSON body with `image` already a URL (frontend uploads to
     Cloudinary directly before calling this), or
   - multipart/form-data with an `image` file (uploaded here)
============================================================ */
router.post("/addblogs", requireAuth, upload.single("image"), async (req, res) => {
  try {
    const { title, subtitle, description, content, author, date } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ message: "title, content and author are required" });
    }

    let imageUrl = req.body.image || "";
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, "blogs");
      imageUrl = result.secure_url;
    }

    const newBlog = new Blog({
      title,
      subtitle,
      description,
      content,
      author,
      image: imageUrl,
      date: date || Date.now(),
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("❌ Failed to create blog:", error);
    res.status(500).json({ message: "Failed to create blog" });
  }
});

/* ============================================================
   PUT /api/product/updateblogs/:id — update blog (protected)
============================================================ */
router.put("/updateblogs/:id", requireAuth, upload.single("image"), async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, "blogs");
      updateData.image = result.secure_url;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(updatedBlog);
  } catch (error) {
    console.error("❌ Failed to update blog:", error);
    res.status(500).json({ message: "Failed to update blog" });
  }
});

/* ============================================================
   DELETE /api/product/deleteblog/:id — delete blog (protected)
============================================================ */
router.delete("/deleteblog/:id", requireAuth, async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("❌ Failed to delete blog:", error);
    res.status(500).json({ message: "Failed to delete blog" });
  }
});

export default router;
