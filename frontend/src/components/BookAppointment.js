import React, { useState } from 'react';
import { createBooking } from '../services/bookingService';

function BookAppointment({ token }) {
  const [form, setForm] = useState({ doctor: '', date: '', time: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createBooking(form, token);
      alert('Appointment booked!');
    } catch (err) {
      alert('Error booking appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="doctor" placeholder="Doctor" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <input name="time" type="time" onChange={handleChange} required />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookAppointment;