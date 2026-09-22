import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: mongoose.Schema.Types.Mixed, required: true }, // string or array of strings
    description: { type: String },
    image: { type: String },
    link: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Portfolio", portfolioSchema);
