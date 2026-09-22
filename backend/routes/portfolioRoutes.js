import express from "express";
import multer from "multer";
import Portfolio from "../models/Portfolio.js";
import requireAuth from "../middleware/auth.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

/* ============================================================
   GET /api/product/getportfolio — list all portfolio items
============================================================ */
router.get("/getportfolio", async (req, res) => {
  try {
    const items = await Portfolio.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    console.error("❌ Failed to fetch portfolio:", error);
    res.status(500).json({ message: "Failed to fetch portfolio" });
  }
});

/* ============================================================
   POST /api/product/addportfolio — create item (protected)
   Accepts JSON with `image` as a URL, or multipart with a file.
============================================================ */
router.post("/addportfolio", requireAuth, upload.single("image"), async (req, res) => {
  try {
    const { title, category, description, link } = req.body;

    if (!title || !category) {
      return res.status(400).json({ message: "title and category are required" });
    }

    let imageUrl = req.body.image || "";
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, "portfolio");
      imageUrl = result.secure_url;
    }

    const newItem = new Portfolio({
      title,
      category,
      description,
      link,
      image: imageUrl,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error("❌ Failed to create portfolio item:", error);
    res.status(500).json({ message: "Failed to create portfolio item" });
  }
});

/* ============================================================
   DELETE /api/product/deleteportfolio/:id — delete (protected)
============================================================ */
router.delete("/deleteportfolio/:id", requireAuth, async (req, res) => {
  try {
    const deleted = await Portfolio.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }
    res.json({ message: "Portfolio item deleted successfully" });
  } catch (error) {
    console.error("❌ Failed to delete portfolio item:", error);
    res.status(500).json({ message: "Failed to delete portfolio item" });
  }
});

export default router;
