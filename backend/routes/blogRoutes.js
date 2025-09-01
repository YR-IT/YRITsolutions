import express from "express";
import multer from "multer";
import Blog from "../models/blog.js";

const router = express.Router();

// Multer setup (local uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// ✅ Create Blog
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, author, content, category } = req.body;
    const blog = new Blog({
      title,
      author,
      content,
      category: category || "General",
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error("❌ Error creating blog:", err);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

// ✅ Get all blogs (with safe sorting + optional pagination)
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    // Use aggregation with allowDiskUse to prevent memory error
    const blogs = await Blog.aggregate([
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit },
    ]).allowDiskUse(true);

    const total = await Blog.countDocuments();

    res.json({
      blogs,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error("❌ Error fetching blogs:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// ✅ Get single blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    console.error("❌ Error fetching blog:", err);
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

// ✅ Update blog
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, author, content, category } = req.body;
    const updateData = { title, author, content, category };
    if (req.file) updateData.image = `/uploads/${req.file.filename}`;

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });

    res.json(updatedBlog);
  } catch (err) {
    console.error("❌ Error updating blog:", err);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

// ✅ Delete blog
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ error: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting blog:", err);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

export default router;
