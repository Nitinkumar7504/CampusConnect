// pages/Welcome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Welcome to CampusConnect</h1>
        <p>Your central hub for all campus updates, attendance, and more!</p>
        <div className="welcome-buttons">
          <button onClick={() => navigate('/student-login')}>Student Login</button>
          <button onClick={() => navigate('/admin-login')}>Admin Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
    </div>
  );
}
