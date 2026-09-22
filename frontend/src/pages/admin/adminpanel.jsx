import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { getStoredToken, clearAuthSession } from '../../config/api';

const AdminPanel = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      clearAuthSession();
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className={`min-h-screen p-4 sm:p-6 md:p-28 transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-100 text-gray-900'}`}>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center flex-1">Admin Panel</h1>
        <button type="button" onClick={toggleTheme} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'bg-slate-800 text-amber-300 hover:bg-slate-700' : 'bg-white text-slate-700 hover:bg-gray-200'}`}>
          {isDarkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
      <div className="md:flex md:space-x-6">
        
        {/* Side Panel */}
        <div className={`md:w-1/4 p-6 rounded-lg shadow-md mb-6 md:mb-0 ${isDarkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-gray-700'}`}>Navigation</h2>
          <nav className="space-y-2">
            <Link to="manageblog" className={`block py-2.5 px-4 rounded transition duration-200 ${isDarkMode ? 'text-slate-300 hover:bg-slate-800 hover:text-white' : 'text-gray-600 hover:bg-gray-200'}`}>Manage Blog</Link>
            <Link to="managecareers" className={`block py-2.5 px-4 rounded transition duration-200 ${isDarkMode ? 'text-slate-300 hover:bg-slate-800 hover:text-white' : 'text-gray-600 hover:bg-gray-200'}`}>Manage Career</Link>
            <Link to="addblog" className={`block py-2.5 px-4 rounded transition duration-200 ${isDarkMode ? 'text-slate-300 hover:bg-slate-800 hover:text-white' : 'text-gray-600 hover:bg-gray-200'}`}>Add Blog</Link>
            <Link to="manageportfolios" className={`block py-2.5 px-4 rounded transition duration-200 ${isDarkMode ? 'text-slate-300 hover:bg-slate-800 hover:text-white' : 'text-gray-600 hover:bg-gray-200'}`}>Manage Portfolios</Link>
          </nav>
        </div>

        {/* Content */}
        <div className={`md:w-3/4 p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}>
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;