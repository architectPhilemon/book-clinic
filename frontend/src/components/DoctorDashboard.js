import React, { useEffect, useState } from 'react';
import { getDoctorAppointments } from '../services/doctorService';

function DoctorDashboard({ doctorId, token }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      if (doctorId && token) {
        const data = await getDoctorAppointments(doctorId, token);
        setAppointments(data);
      }
    }
    fetchAppointments();
  }, [doctorId, token]);

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <ul>
        {appointments.map(a => (
          <li key={a._id}>
            Patient: {a.user}, Date: {a.date.slice(0, 10)}, Time: {a.time}, Status: {a.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDashboard;