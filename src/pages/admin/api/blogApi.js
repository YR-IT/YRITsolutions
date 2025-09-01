import axios from "axios";

// ✅ CRA only supports REACT_APP_ prefixed env vars
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// ✅ Create or update a Blog Post
export const createBlogPost = async (formData) => {
  try {
    const res = await api.post("/api/blogs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data; // returns the created blog object
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

// ✅ Get All Blogs (returns array of blogs)
export const getAllBlogs = async (page = 1, limit = 50) => {
  try {
    const res = await api.get("/api/blogs", {
      params: { page, limit },
    });

    // If backend returns { blogs: [...], total, page, totalPages } use res.data.blogs
    if (Array.isArray(res.data)) {
      return res.data;
    } else if (res.data.blogs && Array.isArray(res.data.blogs)) {
      return res.data.blogs;
    } else {
      return [];
    }
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

// ✅ Delete Blog by ID
export const deleteBlog = async (id) => {
  try {
    const res = await api.delete(`/api/blogs/${id}`);
    return res.data; // returns { message: "Blog deleted successfully" }
  } catch (error) {
    console.error(
      "❌ Error deleting blog:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.error || "Failed to delete blog"
    );
  }
};
