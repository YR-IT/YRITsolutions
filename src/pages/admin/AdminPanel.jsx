import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // ✅ CRA only supports REACT_APP_ env variables
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error("❌ Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Submit handler (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      let res;
      if (editingId) {
        // Update existing blog
        res = await axios.put(`${API_BASE_URL}/api/blogs/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("✅ Blog Updated Successfully!");
      } else {
        // Create new blog
        res = await axios.post(`${API_BASE_URL}/api/blogs`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("✅ Blog Published Successfully!");
      }

      console.log(res.data);
      resetForm();
      fetchBlogs();
    } catch (err) {
      console.error("❌ Failed to publish/update blog:", err.response?.data || err.message);
      alert("❌ Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm("⚠️ Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/api/blogs/${id}`);
      alert("🗑️ Blog Deleted Successfully!");
      fetchBlogs();
    } catch (err) {
      console.error("❌ Failed to delete blog:", err);
      alert("❌ Failed to delete blog");
    }
  };

  // Edit blog (prefill form)
  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setTitle(blog.title);
    setAuthor(blog.author);
    setContent(blog.content);
    setImage(null); // Reset image, user can re-upload if needed
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset form
  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setImage(null);
    setEditingId(null);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        🛠 Admin Panel - Manage Blogs
      </h2>

      {/* Blog Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4 mb-10"
      >
        {/* Title */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border rounded-lg p-2 bg-white text-black placeholder-gray-500"
            placeholder="Enter blog title"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full border rounded-lg p-2 bg-white text-black placeholder-gray-500"
            placeholder="Enter author name"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="6"
            className="w-full border rounded-lg p-2 bg-white text-black placeholder-gray-500"
            placeholder="Write your blog content..."
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />
        </div>

        {/* Preview */}
        {image && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Image Preview:</p>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Submit */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            {loading
              ? editingId
                ? "Updating..."
                : "Publishing..."
              : editingId
              ? "Update Blog"
              : "Publish Blog"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Blog List */}
      <h3 className="text-2xl font-semibold mb-4">📑 Recent Blogs</h3>
      {blogs.length === 0 ? (
        <p className="text-gray-600">No blogs found.</p>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex-1 pr-4">
                <h4 className="text-lg font-bold text-gray-900">{blog.title}</h4>
                <p className="text-sm text-gray-600">✍ {blog.author}</p>
                <p className="text-gray-700 mt-2 line-clamp-2">{blog.content}</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
