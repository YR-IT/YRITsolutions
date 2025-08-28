import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true, // Cloudinary URL
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: String,
      default: 'Admin',
      trim: true,
    },
    category: {
      type: String,
      default: 'General',
      trim: true,
    },
    readTime: {
      type: String,
      default: '2 min read',
      trim: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

// Avoid OverwriteModelError in dev environments
export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
