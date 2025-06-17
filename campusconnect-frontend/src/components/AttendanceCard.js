import React from 'react';
import './AttendanceCard.css';

export default function AttendanceCard({ subject, present, total }) {
  const percent = Math.round((present / total) * 100);

  return (
    <div className="attendance-card">
      <h4 className="subject">{subject}</h4>
      <p className="count">{present}/{total}</p>
      <div
        className="progress-circle"
        style={{
          background: `conic-gradient(#7c3aed ${percent * 3.6}deg, #e5e7eb ${percent * 3.6}deg)`
        }}
      >
        {percent}%
      </div>
      <small className="footer">Last 24 Hours</small>
    </div>
  );
}
