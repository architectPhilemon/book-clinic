import React, { useState } from 'react';
import { registerDoctor } from '../services/doctorService';

function DoctorRegister() {
  const [form, setForm] = useState({ name: '', specialty: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await registerDoctor(form);
      setMessage('Doctor registration successful!');
      setForm({ name: '', specialty: '', email: '' });
    } catch (err) {
      setMessage('Registration failed');
    }
  };

  return (
    <div>
      <h2>Doctor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="specialty"
          placeholder="Specialty"
          value={form.specialty}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DoctorRegister;