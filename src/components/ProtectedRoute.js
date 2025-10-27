import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminPanel from '../pages/admin/adminpanel';
const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem('token');
  return token ? <AdminPanel /> : <Navigate to="/login" />;
};
export default ProtectedRoute;