import React, { useState } from 'react';
import { register } from '../services/userService';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
  e.preventDefault();
  try {
    await register(form); // form should have name, email, password
    setMessage('Registration successful!');
    setForm({ name: '', email: '', password: '' });
  } catch (err) {
    setMessage('Registration failed');
    if (err.response) {
      console.error('Backend error:', err.response.data);
    } else {
      console.error('Error:', err.message);
    }
  }
};

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
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
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;