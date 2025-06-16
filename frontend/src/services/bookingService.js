import api from '../api/api';

export const createBooking = async (bookingData, token) => {
  const res = await api.post('/bookings', bookingData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const getMyAppointments = async (token) => {
  const res = await api.get('/bookings/my', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const getDoctorAppointments = async (doctorId, token) => {
  const res = await api.get(`/doctors/${doctorId}/appointments`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};