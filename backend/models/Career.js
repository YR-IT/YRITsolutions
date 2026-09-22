import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    job_number: { type: String, required: true },
    date: { type: String, required: true },
    hiring_role: { type: String, required: true },
    job_type: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Career", careerSchema);
