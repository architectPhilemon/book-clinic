import axios from 'axios';

const api = axios.create({
  baseURL: 'https://book-clinic-production.up.railway.app/api',
});

export default api;