import React, { useState } from "react";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("image", image);

    // You can replace this with axios/fetch POST to your backend
    console.log("Blog Data Submitted:", {
      title,
      author,
      content,
      image,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          📝 Add New Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Author</label>
            <input
              type="text"
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Content</label>
            <textarea
              placeholder="Write your blog content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border rounded-lg p-2 text-black"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            🚀 Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
