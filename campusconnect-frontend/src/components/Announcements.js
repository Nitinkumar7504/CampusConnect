import React from 'react';
import './Announcements.css';

export default function Announcements() {
  const list = [
    { type: 'Academic', message: 'Summer training internship with Live Projects.', time: '2 Minutes Ago' },
    { type: 'Co-curricular', message: 'Global internship opportunity by Student organization.', time: '10 Minutes Ago' },
    { type: 'Examination', message: 'Instructions for Mid Term Examination.', time: 'Yesterday' }
  ];

  return (
    <div className="announcements">
      <h3>Announcements</h3>
      {list.map((a, i) => (
        <div key={i} className="announcement">
          <strong>{a.type}</strong> {a.message}
          <p>{a.time}</p>
        </div>
      ))}
    </div>
  );
}
