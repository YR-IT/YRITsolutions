import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Or wherever your login page is
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-28">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Admin Panel</h1>
      <div className="md:flex md:space-x-6">
        
        {/* Side Panel */}
        <div className="md:w-1/4 bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Navigation</h2>
          <nav className="space-y-2">
            <Link to="manageblog" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600">Manage Blog</Link>
            <Link to="managecareers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600">Manage Career</Link>
            <Link to="addblog" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600">Add Blog</Link>
          </nav>
        </div>

        {/* Content */}
        <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;