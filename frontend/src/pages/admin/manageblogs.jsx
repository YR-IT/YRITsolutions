import React, { useState, useEffect } from 'react';
import { API_BASE_URL, getAuthHeaders } from '../../config/api';
import { useTheme } from '../../contexts/ThemeContext';

const ManageBlog = () => {
  const { isDarkMode } = useTheme();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/product/getblogs`);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) {
      setError('An error occurred while fetching blogs.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid image file (JPEG, PNG, GIF, WebP)');
        return;
      }

      setNewImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    if (!editingBlog) return;
    const { name, value } = e.target;
    setEditingBlog({
      ...editingBlog,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingBlog) return;

    setIsUpdating(true);
    const formData = new FormData();
    formData.append('title', editingBlog.title);
    formData.append('subtitle', editingBlog.subtitle || '');
    formData.append('description', editingBlog.description || '');
    formData.append('date', editingBlog.date || '');
    formData.append('author', editingBlog.author || '');
    formData.append('content', editingBlog.content);

    if (newImage) {
      formData.append('image', newImage);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/product/updateblogs/${editingBlog._id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: formData,
      });

      if (response.ok) {
        alert('Blog updated successfully!');
        await fetchBlogs();
        closeModal();
      } else {
        const errData = await response.json().catch(() => ({}));
        alert(errData.message || 'Failed to update blog.');
      }
    } catch (err) {
      alert('An error occurred while updating the blog.');
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleEdit = (blog) => {
    // Format date for <input type="date"> (needs YYYY-MM-DD)
    let formattedDate = '';
    if (blog.date) {
      try {
        formattedDate = new Date(blog.date).toISOString().split('T')[0];
      } catch {
        formattedDate = blog.date;
      }
    }

    setEditingBlog({
      ...blog,
      date: formattedDate,
    });
    setNewImage(null);
    setImagePreview(blog.image || '');
    setIsModalOpen(true);
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/api/product/deleteblog/${blogId}`, {
          method: 'DELETE',
          headers: getAuthHeaders(),
        });

        if (response.ok) {
          setBlogs(blogs.filter((b) => b._id !== blogId));
          alert('Blog post deleted successfully!');
        } else {
          alert('Failed to delete blog post.');
        }
      } catch (err) {
        alert('An error occurred while deleting the blog post.');
        console.error(err);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingBlog(null);
    setNewImage(null);
    setImagePreview('');
  };

  if (isLoading) {
    return <div className={`container mx-auto p-4 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>Loading blogs...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className={`container mx-auto p-4 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
      <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>Manage Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className={`rounded-lg shadow-md flex flex-col justify-between overflow-hidden border ${
                isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              <div>
                <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>{blog.title}</h3>
                  <p className={`font-semibold text-sm mb-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{blog.subtitle}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Author: {blog.author}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    Date: {blog.date ? new Date(blog.date).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 flex gap-3">
                <button
                  onClick={() => handleEdit(blog)}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className={isDarkMode ? 'text-slate-400' : 'text-gray-500'}>No blogs found.</p>
        )}
      </div>

      {isModalOpen && editingBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div
            className={`p-8 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${
              isDarkMode ? 'bg-slate-800 text-white border border-slate-700' : 'bg-white text-gray-900'
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Edit Blog Post
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className={`text-2xl leading-none font-semibold ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="title" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={editingBlog.title}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 ${
                      isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'
                    }`}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subtitle" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Subtitle</label>
                  <input
                    type="text"
                    name="subtitle"
                    id="subtitle"
                    value={editingBlog.subtitle || ''}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 ${
                      isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="author" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Author</label>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    value={editingBlog.author}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 ${
                      isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'
                    }`}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="date" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={editingBlog.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 ${
                      isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="description" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Description</label>
                <textarea
                  name="description"
                  id="description"
                  value={editingBlog.description || ''}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 ${
                    isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'
                  }`}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="content" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Content</label>
                <textarea
                  name="content"
                  id="content"
                  value={editingBlog.content}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 ${
                    isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'
                  }`}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="image" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Blog Image (Leave empty to keep existing image)
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                  onChange={handleFileChange}
                  className={`w-full text-sm ${
                    isDarkMode
                      ? 'text-slate-300 file:bg-purple-900 file:text-purple-200 hover:file:bg-purple-800'
                      : 'text-gray-500 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100'
                  } file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold`}
                />
                {imagePreview && (
                  <div className="mt-3">
                    <p className={`text-xs mb-1 font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                      {newImage ? 'New Selected Image Preview:' : 'Current Image:'}
                    </p>
                    <img
                      src={imagePreview}
                      alt="Blog Preview"
                      className={`h-36 w-auto object-cover rounded-lg border ${
                        isDarkMode ? 'border-slate-600' : 'border-gray-300'
                      }`}
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isUpdating}
                  className={`px-5 py-2 rounded-lg transition-colors font-medium text-sm ${
                    isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm disabled:opacity-50"
                >
                  {isUpdating ? 'Updating...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlog;