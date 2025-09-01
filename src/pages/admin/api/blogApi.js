import axios from "axios";

// ✅ CRA only supports REACT_APP_ prefixed env vars
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// ✅ Create Blog Post
export const createBlogPost = async (formData) => {
  try {
    const res = await api.post("/api/blogs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    console.error(
      "❌ Error submitting blog post:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.error || "Failed to submit blog post"
    );
  }
};

// ✅ Get All Blogs (with pagination support)
export const getAllBlogs = async (page = 1, limit = 10) => {
  try {
    const res = await api.get("/api/blogs", {
      params: { page, limit }, // ✅ send pagination to backend
    });
    return res.data; // { blogs: [...], totalPages, currentPage }
  } catch (error) {
    console.error(
      "❌ Error fetching blogs:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.error || "Failed to fetch blogs"
    );
  }
};
