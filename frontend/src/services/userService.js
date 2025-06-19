import api from '../api/api';

// Use this for deployed backend (api base URL is set in api.js)
export const register = async (userData) => {
  const res = await api.post('/users/register', userData);
  return res.data;
};

export const login = async (userData) => {
  const res = await api.post('/users/login', userData);
  return res.data;
};