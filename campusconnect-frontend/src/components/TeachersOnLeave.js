import React from 'react';
import './TeachersOnLeave.css';

export default function TeachersOnLeave() {
  const teachers = [
    { name: 'The Professor', type: 'Full Day' },
    { name: 'Lisa Monobcal', type: 'Half Day' }
  ];

  return (
    <div className="teachers-leave">
      <h3>Teachers on leave</h3>
      {teachers.map((t, i) => (
        <div key={i} className="teacher">
          <p><strong>{t.name}</strong> - {t.type}</p>
        </div>
      ))}
    </div>
  );
}
