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
      return res.status(400).json({
        error: "Title, author, and content are required",
      });
    }

    let imageUrl = null;
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      imageUrl = result.secure_url;
      console.log("✅ Uploaded to Cloudinary:", imageUrl);
    }

    const blog = new Blog({ title, author, content, image: imageUrl });
    const savedBlog = await blog.save();

    return res.status(201).json(savedBlog);
  } catch (err) {
    console.error("❌ Blog save error:", err);
    return res.status(500).json({
      error: "Failed to create blog",
      details: err.message || err,
    });
  }
});

// ✅ Get All Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.json({ blogs });
  } catch (err) {
    console.error("❌ Error fetching blogs:", err);
    return res.status(500).json({
      error: "Failed to fetch blogs",
      details: err.message || err,
    });
  }
});

// ✅ Get Single Blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    return res.json(blog);
  } catch (err) {
    console.error("❌ Error fetching blog:", err);
    return res.status(500).json({
      error: "Failed to fetch blog",
      details: err.message || err,
    });
  }
});

// ✅ Delete Blog
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ error: "Blog not found" });
    return res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting blog:", err);
    return res.status(500).json({
      error: "Failed to delete blog",
      details: err.message || err,
    });
  }
});

// ✅ Update Blog
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, author, content } = req.body;
    let imageUrl = req.body.image || null;

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      imageUrl = result.secure_url;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, author, content, image: imageUrl },
      { new: true }
    );

    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });

    return res.json(updatedBlog);
  } catch (err) {
    console.error("❌ Error updating blog:", err);
    return res.status(500).json({
      error: "Failed to update blog",
      details: err.message || err,
    });
  }
});

export default router;
