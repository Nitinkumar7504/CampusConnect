import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/avatar.png" alt="User" className="avatar" />
      <h3>Hey, <strong>Alex</strong></h3>
      <p>ID: 12102030</p>
      <p><strong>Course:</strong> BTech. Computer Science & Engineering</p>
      <p><strong>DOB:</strong> 29-Feb-2020</p>
      <p><strong>Contact:</strong> 1234567890</p>
      <p><strong>Email:</strong> unknown@gmail.com</p>
      <p><strong>Address:</strong> Ghost town Road, New York, America</p>
    </div>
  );
}
