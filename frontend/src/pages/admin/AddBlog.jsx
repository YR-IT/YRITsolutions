import { useState } from 'react';
import { API_BASE_URL, getAuthHeaders } from '../../config/api';
import { useTheme } from '../../contexts/ThemeContext';


const AddBlog = () => {
  const { isDarkMode } = useTheme();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !subtitle || !description || !content || !image || !date || !author) {
      alert('Please fill in all fields and select an image.');
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subtitle', subtitle);
      formData.append('description', description);
      formData.append('content', content);
      formData.append('date', date);
      formData.append('author', author);
      formData.append('image', image);

      const response = await fetch(`${API_BASE_URL}/api/product/addblogs`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: formData,
      });

      if (response.ok) {
        alert('Blog post added successfully!');
        setTitle('');
        setSubtitle('');
        setDescription('');
        setContent('');
        setImage(null);
        setImagePreview('');
        setDate('');
        setAuthor('');
      } else {
        alert('Failed to add blog post.');
      }
    } catch (err) {
      alert('An error occurred while adding the blog post.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container mx-auto p-4 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
      <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>Add Blog Post</h1>
      <form onSubmit={handleSubmit} className={`p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto ${isDarkMode ? 'bg-slate-800 text-white border border-slate-700' : 'bg-white text-black'}`}>
        <div className="mb-4">
            <label htmlFor="title" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
          />
        </div>
        <div className="mb-4">
            <label htmlFor="subtitle" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Subtitle</label>
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
          />
        </div>
        <div className="mb-4">
            <label htmlFor="description" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
            Blog Image (Max 5MB)
          </label>
          <input
            type="file"
            id="image"
            name='image'
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            onChange={handleFileChange}
            className={`w-full text-sm ${isDarkMode ? 'text-slate-300 file:bg-purple-900 file:text-purple-200 hover:file:bg-purple-800' : 'text-gray-500 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100'} file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold`}
          />
        </div>
        {imagePreview && (
          <div className="mt-4">
            <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Image Preview:</p>
            <img 
              src={imagePreview} 
              alt="Blog preview" 
              className={`mt-2 h-48 w-auto object-cover rounded-lg border shadow-sm ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`} 
            />
          </div>
        )}
        <div className="flex justify-end">
          <button type="submit" disabled={isLoading} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50">
            {isLoading ? 'Uploading...' : 'Add Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;