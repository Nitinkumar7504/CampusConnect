import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/DashboardAdmin.css';
import { useNavigate } from 'react-router-dom';

export default function DashboardAdmin() {
  const [students, setStudents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
    fetchAnnouncements();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/students');
      setStudents(res.data);
    } catch (error) {
      alert('❌ Failed to fetch student data');
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/announcements');
      setAnnouncements(res.data);
    } catch (error) {
      console.error('❌ Failed to fetch announcements:', error);
    }
  };

  const handleChange = (index, field, value) => {
    const updated = [...students];
    updated[index][field] = value;
    setStudents(updated);
  };

  const handleUpdate = async (studentId, index) => {
    try {
      const { attendance } = students[index];
      await axios.put(`http://localhost:5000/api/admin/student/${studentId}`, {
        attendance,
      });
      alert('✅ Student updated successfully');
    } catch (error) {
      console.error('❌ Failed to update student:', error.message);
      alert('❌ Failed to update student');
    }
  };

  const postAnnouncement = async () => {
    if (!newAnnouncement.trim()) return;
    try {
      await axios.post('http://localhost:5000/api/admin/announcement', {
        message: newAnnouncement,
      });
      setNewAnnouncement('');
      fetchAnnouncements();
    } catch (error) {
      alert('❌ Failed to post announcement');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Remove token
    navigate('/admin-login'); // Redirect to admin login
  };

  return (
    <div className="admin-dashboard">
      <div className="top-bar">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <h2>Post Announcement</h2>
      <textarea
        value={newAnnouncement}
        onChange={(e) => setNewAnnouncement(e.target.value)}
        placeholder="Write an announcement"
      />
      <button onClick={postAnnouncement}>Post</button>

      <h3>Recent Announcements</h3>
      <ul>
        {announcements.map((a, i) => (
          <li key={i}>
            {a.message} — {new Date(a.date).toLocaleString()}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Manage Students</h2>
      {students.map((student, index) => (
        <div key={student._id} className="student-card">
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <input
            type="number"
            value={student.attendance || ''}
            onChange={(e) => handleChange(index, 'attendance', e.target.value)}
            placeholder="Attendance %"
          />
          <button onClick={() => handleUpdate(student._id, index)}>Update</button>
        </div>
      ))}
    </div>
  );
}
