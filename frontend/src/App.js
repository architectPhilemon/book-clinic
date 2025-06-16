import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import MyAppointmentPage from './pages/MyAppointmentPage';
import DoctorRegisterPage from './pages/DoctorRegisterPage';
import DoctorDashboardPage from './pages/DoctorDashboardPage';
import ServiceListPage from './pages/ServiceListPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/my-appointments" element={<MyAppointmentPage />} />
        <Route path="/doctor-register" element={<DoctorRegisterPage />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboardPage />} />
        <Route path="/services" element={<ServiceListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
