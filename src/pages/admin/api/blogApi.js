import axios from "axios";

// ==========================
// ✅ Detect Environment & API URL
// ==========================
const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (window.location.hostname === "localhost"
    ? "http://localhost:3001" // local backend
    : "https://yritsolutions.onrender.com"); // deployed backend

// ✅ Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// ==========================
// 🔹 Centralized Error Handler
// ==========================
const handleError = (error, defaultMsg) => {
  console.error(
    `❌ API Error: ${defaultMsg}`,
    error.response?.data || error.message
  );
  throw new Error(error.response?.data?.error || defaultMsg);
};

// ==========================
// ✅ Create Blog Post
// ==========================
export const createBlogPost = async (formData) => {
  try {
    const res = await api.post("/api/blogs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("✅ Blog created:", res.data);
    return res.data;
  } catch (error) {
    handleError(error, "Failed to create blog post");
  }
};

// ==========================
// ✅ Update Blog Post
// ==========================
export const updateBlogPost = async (id, formData) => {
  try {
    const res = await api.put(`/api/blogs/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("✅ Blog updated:", res.data);
    return res.data;
  } catch (error) {
    handleError(error, "Failed to update blog post");
  }
};

// ==========================
// ✅ Get All Blogs
// ==========================
export const getAllBlogs = async (page = 1, limit = 50) => {
  try {
    const res = await api.get("/api/blogs", { params: { page, limit } });
    console.log("📥 Blogs API response:", res.data);

    // Handle different response shapes
    if (Array.isArray(res.data)) return res.data;
    if (res.data.blogs && Array.isArray(res.data.blogs)) return res.data.blogs;

    return [];
  } catch (error) {
    handleError(error, "Failed to fetch blogs");
  }
};

// ==========================
// ✅ Get Single Blog
// ==========================
export const getSingleBlog = async (id) => {
  try {
    const res = await api.get(`/api/blogs/${id}`);
    console.log("📥 Single blog response:", res.data);
    return res.data;
  } catch (error) {
    handleError(error, "Failed to fetch blog details");
  }
};

// ==========================
// ✅ Delete Blog
// ==========================
export const deleteBlog = async (id) => {
  try {
    const res = await api.delete(`/api/blogs/${id}`);
    console.log("🗑️ Blog deleted:", res.data);
    return res.data; // { message: "Blog deleted successfully" }
  } catch (error) {
    handleError(error, "Failed to delete blog");
  }
};
