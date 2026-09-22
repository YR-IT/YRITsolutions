import { useState, useEffect } from 'react';
import { API_BASE_URL, getAuthHeaders } from '../../config/api';
import { useTheme } from '../../contexts/ThemeContext';

const ManagePortfolios = () => {
  const { isDarkMode } = useTheme();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [link, setLink] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/product/getportfolio`);
      const data = await response.json();
      setPortfolios(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching portfolios:', error);
      setPortfolios([]);
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
    if (!category || !title || !description || !image || !link) {
      alert('Please fill in all fields and select an image.');
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('link', link);
      formData.append('image', image);

      const response = await fetch(`${API_BASE_URL}/api/product/addportfolio`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: formData,
      });

      if (response.ok) {
        alert('Portfolio item added successfully!');
        setCategory('');
        setTitle('');
        setDescription('');
        setImage(null);
        setLink('');
        setImagePreview('');
        fetchPortfolios(); // Refresh the list
      } else {
        alert('Failed to add portfolio item.');
      }
    } catch (err) {
      alert('An error occurred while adding the portfolio item.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this portfolio item?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/api/product/deleteportfolio/${id}`,
         {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          alert('Portfolio item deleted successfully!');
          fetchPortfolios(); // Refresh the list
        } else {
          alert('Failed to delete portfolio item.');
        }
      } catch (err) {
        alert('An error occurred while deleting the portfolio item.');
        console.error(err);
      }
    }
  };

  return (
    <div className={`container mx-auto p-4 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>Add Portfolio Item</h1>
        <form onSubmit={handleSubmit} className={`p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto ${isDarkMode ? 'bg-slate-800 text-white border border-slate-700' : 'bg-white text-black'}`}>
          <div className="mb-4">
            <label htmlFor="category" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
            />
          </div>
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
            <label htmlFor="link" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Link</label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="image" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              Portfolio Image (Max 5MB)
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
                alt="Portfolio preview" 
                className={`mt-2 h-48 w-auto object-cover rounded-lg border shadow-sm ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`} 
              />
            </div>
          )}
          <div className="flex justify-end">
            <button type="submit" disabled={isLoading} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50">
              {isLoading ? 'Uploading...' : 'Add Portfolio'}
            </button>
          </div>
        </form>
      </div>

      <div>
        <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>Manage Portfolios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.length > 0 ? (
            portfolios.map((portfolio) => (
              <div key={portfolio._id} className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-slate-800 text-white border border-slate-700' : 'bg-white text-black'}`}>
                <img src={portfolio.image} alt={portfolio.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{portfolio.title}</h2>
                  <p className={`mb-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>{portfolio.category}</p>
                  <p className={`mb-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{portfolio.description}</p>
                  <a href={portfolio.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-4 block">View Project</a>
                  <button 
                    onClick={() => handleDelete(portfolio._id)}
                    className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No portfolios found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePortfolios;