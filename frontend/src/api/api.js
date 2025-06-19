import AboutPage from '../pages/AboutPage'; // Adjust the path based on your structure
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const api = axios.create({
  baseURL: 'https://book-clinic.onrender.com',
});

export default api;

<Route path="/about" element={<AboutPage />} />


