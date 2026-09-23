import { useState, useEffect } from 'react';
import { API_BASE_URL, getAuthHeaders } from '../../config/api';
import { useTheme } from '../../contexts/ThemeContext';

const ManagePortfolios = () => {
  const { isDarkMode } = useTheme();

  // Add Portfolio Form State
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [link, setLink] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [portfolios, setPortfolios] = useState([]);

  // Edit Portfolio Modal State
  const [editingPortfolio, setEditingPortfolio] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    title: '',
    category: '',
    description: '',
    link: '',
  });
  const [editImage, setEditImage] = useState(null);
  const [editImagePreview, setEditImagePreview] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

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

  // Open Edit Modal
  const handleEditClick = (portfolio) => {
    setEditingPortfolio(portfolio);
    setEditForm({
      title: portfolio.title || '',
      category: Array.isArray(portfolio.category) ? portfolio.category.join(', ') : (portfolio.category || ''),
      description: portfolio.description || '',
      link: portfolio.link || '',
    });
    setEditImage(null);
    setEditImagePreview(portfolio.image || '');
    setIsEditModalOpen(true);
  };

  const handleEditFileChange = (e) => {
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
      setEditImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!editingPortfolio) return;
    if (!editForm.title || !editForm.category) {
      alert('Title and category are required.');
      return;
    }

    setIsUpdating(true);
    try {
      const formData = new FormData();
      formData.append('title', editForm.title);
      formData.append('category', editForm.category);
      formData.append('description', editForm.description);
      formData.append('link', editForm.link);
      if (editImage) {
        formData.append('image', editImage);
      }

      const response = await fetch(`${API_BASE_URL}/api/product/updateportfolio/${editingPortfolio._id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: formData,
      });

      if (response.ok) {
        alert('Portfolio item updated successfully!');
        setIsEditModalOpen(false);
        setEditingPortfolio(null);
        setEditImage(null);
        setEditImagePreview('');
        fetchPortfolios();
      } else {
        const errData = await response.json().catch(() => ({}));
        alert(errData.message || 'Failed to update portfolio item.');
      }
    } catch (err) {
      alert('An error occurred while updating the portfolio item.');
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingPortfolio(null);
    setEditImage(null);
    setEditImagePreview('');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this portfolio item?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/api/product/deleteportfolio/${id}`, {
          method: 'DELETE',
          headers: getAuthHeaders(),
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
              required
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
              required
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
              required
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
              required
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
            <div className="mt-4 mb-4">
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
              <div key={portfolio._id} className={`p-4 rounded-lg shadow-lg flex flex-col justify-between ${isDarkMode ? 'bg-slate-800 text-white border border-slate-700' : 'bg-white text-black'}`}>
                <div>
                  <img src={portfolio.image} alt={portfolio.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{portfolio.title}</h2>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                      {Array.isArray(portfolio.category) ? portfolio.category.join(', ') : portfolio.category}
                    </span>
                    <p className={`mb-3 text-sm line-clamp-3 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{portfolio.description}</p>
                    {portfolio.link && (
                      <a href={portfolio.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm mb-4 block">
                        View Project ↗
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-4 pt-0 flex gap-3">
                  <button 
                    onClick={() => handleEditClick(portfolio)}
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(portfolio._id)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
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

      {/* Edit Portfolio Modal */}
      {isEditModalOpen && editingPortfolio && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className={`p-8 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-slate-800 text-white border border-slate-700' : 'bg-white text-gray-900'}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Edit Portfolio Project
              </h2>
              <button 
                type="button" 
                onClick={closeEditModal} 
                className={`text-2xl leading-none font-semibold ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Title</label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
                  required
                />
              </div>

              <div className="mb-4">
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Category</label>
                <input
                  type="text"
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
                  required
                />
              </div>

              <div className="mb-4">
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Project Link</label>
                <input
                  type="text"
                  value={editForm.link}
                  onChange={(e) => setEditForm({ ...editForm, link: e.target.value })}
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
                  required
                />
              </div>

              <div className="mb-4">
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Description</label>
                <textarea
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-purple-500 focus:border-purple-500 ${isDarkMode ? 'bg-slate-900 border-slate-600 text-white' : 'border-gray-300'}`}
                  required
                />
              </div>

              <div className="mb-6">
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Project Image (Leave empty to keep existing image)
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                  onChange={handleEditFileChange}
                  className={`w-full text-sm ${isDarkMode ? 'text-slate-300 file:bg-purple-900 file:text-purple-200 hover:file:bg-purple-800' : 'text-gray-500 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100'} file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold`}
                />
                {editImagePreview && (
                  <div className="mt-3">
                    <p className={`text-xs mb-1 font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                      {editImage ? 'New Selected Image Preview:' : 'Current Image:'}
                    </p>
                    <img 
                      src={editImagePreview} 
                      alt="Portfolio Preview" 
                      className={`h-36 w-auto object-cover rounded-lg border ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`} 
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeEditModal}
                  disabled={isUpdating}
                  className={`px-5 py-2 rounded-lg transition-colors font-medium text-sm ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
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

export default ManagePortfolios;