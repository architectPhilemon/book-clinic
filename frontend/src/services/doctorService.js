import api from '../api/api';

export const getDoctors = async () => {
  const res = await api.get('/doctors');
  return res.data;
};

export const getDoctorAppointments = async (doctorId, token) => {
  const res = await api.get(`/doctors/${doctorId}/appointments`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const registerDoctor = async (doctorData) => {
  const res = await api.post('/doctors/register', doctorData);
  return res.data;
};