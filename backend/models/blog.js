import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String }, // URL or /uploads/filename
    category: { type: String, default: "General" }, // optional: category
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
