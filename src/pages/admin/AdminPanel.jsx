import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/blogs`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("✅ Blog Published Successfully!");
      console.log(res.data);

      // Reset form
      setTitle("");
      setAuthor("");
      setContent("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to publish blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🛠 Admin Panel - Upload Blog</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4"
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
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
