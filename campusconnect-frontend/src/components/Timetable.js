import React from 'react';
import './Timetable.css';

export default function Timetable() {
  const schedule = [
    { time: '10–11 AM', room: '33-309', subject: 'DBMS130', type: 'Lecture' },
    { time: '11–12 AM', room: '38-719', subject: 'CS200', type: 'Lecture' },
  ];

  return (
    <div className="timetable">
      <h3>Today's Timetable</h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Room No.</th>
            <th>Subject</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((s, i) => (
            <tr key={i}>
              <td>{s.time}</td>
              <td>{s.room}</td>
              <td>{s.subject}</td>
              <td>{s.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
