import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Clinic Booking</div>
      <button className="navbar-toggle" onClick={handleToggle}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </button>
      <ul className={`navbar-links${open ? ' open' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
        <li><Link to="/book-appointment" onClick={handleLinkClick}>Book Appointment</Link></li>
        <li><Link to="/my-appointments" onClick={handleLinkClick}>My Appointments</Link></li>
        <li><Link to="/doctor-dashboard" onClick={handleLinkClick}>Doctor Dashboard</Link></li>
        <li><Link to="/doctor-register" onClick={handleLinkClick}>Doctor Register</Link></li>
        <li><Link to="/login" onClick={handleLinkClick}>Login</Link></li>
        <li><Link to="/register" onClick={handleLinkClick}>Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;