import React, { useEffect, useState } from 'react';
import { getMyAppointments } from '../services/bookingService';

function MyAppointment({ token }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      if (token) {
        const data = await getMyAppointments(token);
        setAppointments(data);
      }
    }
    fetchAppointments();
  }, [token]);

  return (
    <div>
      <h2>My Appointments</h2>
      <ul>
        {appointments.map(a => (
          <li key={a._id}>
            Doctor: {a.doctor}, Date: {a.date.slice(0, 10)}, Time: {a.time}, Status: {a.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyAppointment;