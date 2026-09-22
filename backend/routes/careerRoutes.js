import express from "express";
import Career from "../models/Career.js";
import requireAuth from "../middleware/auth.js";

const router = express.Router();

/* ============================================================
   GET /api/product/getcareers — list all job openings
============================================================ */
router.get("/getcareers", async (req, res) => {
  try {
    const careers = await Career.find().sort({ createdAt: -1 });
    res.json(careers);
  } catch (error) {
    console.error("❌ Failed to fetch careers:", error);
    res.status(500).json({ message: "Failed to fetch careers" });
  }
});

/* ============================================================
   POST /api/product/addcareer — create job opening (protected)
============================================================ */
router.post("/addcareer", requireAuth, async (req, res) => {
  try {
    const { job_number, date, hiring_role, job_type, location } = req.body;

    if (!job_number || !hiring_role || !job_type || !location) {
      return res.status(400).json({ message: "Missing required career fields" });
    }

    const newCareer = new Career({ job_number, date, hiring_role, job_type, location });
    await newCareer.save();
    res.status(201).json(newCareer);
  } catch (error) {
    console.error("❌ Failed to create career:", error);
    res.status(500).json({ message: "Failed to create career" });
  }
});

/* ============================================================
   DELETE /api/product/deletecareer/:id — delete (protected)
============================================================ */
router.delete("/deletecareer/:id", requireAuth, async (req, res) => {
  try {
    const deleted = await Career.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Career not found" });
    }
    res.json({ message: "Career deleted successfully" });
  } catch (error) {
    console.error("❌ Failed to delete career:", error);
    res.status(500).json({ message: "Failed to delete career" });
  }
});

export default router;
