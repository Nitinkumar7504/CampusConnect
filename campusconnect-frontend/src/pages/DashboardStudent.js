import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/DashboardStudent.css';

const DashboardStudent = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
    fetchStudentProfile();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/announcements');
      setAnnouncements(res.data);
    } catch (err) {
      console.error(' Failed to load announcements:', err.message);
    }
  };

  const fetchStudentProfile = async () => {
    try {
      const token = localStorage.getItem('studentToken');
      const res = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudent(res.data);
    } catch (err) {
      console.error(' Failed to load student profile:', err.message);
    }
  };

  return (
    <div className="student-dashboard">
      <h2>Welcome {student?.name || 'Student'}</h2>

      {student && (
        <>
          <h3>Your Attendance</h3>
          <div className="attendance-box">{student.attendance ?? 'N/A'}%</div>
        </>
      )}

      <hr />

      <h3>Announcements</h3>
      <ul className="announcement-list">
        {announcements.map((a, i) => (
          <li className="announcement-item" key={i}>
            {a.message}
            <span>{new Date(a.date).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardStudent;

