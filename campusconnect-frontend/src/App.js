import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Register from './pages/Register';
import StudentLogin from './pages/StudentLogin';
import AdminLogin from './pages/AdminLogin';
import DashboardStudent from './pages/DashboardStudent';
import DashboardAdmin from './pages/DashboardAdmin';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import { isAdminLoggedIn } from './constants/adminAuth';
import AppNav from './AppNav';
import Welcome from './pages/Welcome';

import './styles/App.css';

function App() {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route
          path="/admin-login"
          element={
            isAdminLoggedIn() ? (
              <Navigate to="/admin-dashboard" />
            ) : (
              <AdminLogin />
            )
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <AdminPrivateRoute>
              <DashboardAdmin />
            </AdminPrivateRoute>
          }
        />
        <Route path="/student-dashboard" element={<DashboardStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
