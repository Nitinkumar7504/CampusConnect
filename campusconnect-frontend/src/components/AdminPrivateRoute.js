import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAdminLoggedIn } from '../constants/adminAuth';

export default function AdminPrivateRoute({ children }) {
  return isAdminLoggedIn() ? children : <Navigate to="/admin-login" />;
}
