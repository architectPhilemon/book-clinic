import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Clinic Booking App</h1>
        <p>Book appointments, view services, and manage your health easily.</p>
        <div className="hero-links">
          <Link to="/" className="hero-btn">Home</Link>
          <Link to="/about" className="hero-btn">About</Link>
          <Link to="/services" className="hero-btn">Features</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;