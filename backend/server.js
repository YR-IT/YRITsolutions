import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  image: String, // URL of uploaded image
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);

// Multer for image upload (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ POST: Create new blog
app.post("/api/blogs", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";
    if (req.file) {
      // for now just save as base64 (later we can use Cloudinary)
      imageUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    }

    const blog = new Blog({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      image: imageUrl,
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET: Fetch all blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
