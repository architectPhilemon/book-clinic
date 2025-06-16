const doctorService = require('../services/doctorService');
const bookingService = require('../services/bookingService');

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.getDoctors();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDoctorAppointments = async (req, res) => {
  try {
    const appointments = await bookingService.getDoctorBookings(req.params.doctorId);
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.registerDoctor = async (req, res) => {
  const { name, specialty, email } = req.body;
  console.log('Doctor registration request body:', req.body);
  try {
    if (!name || !specialty || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const doctorExists = await doctorService.getDoctors({ email });
    if (doctorExists.length > 0) {
      return res.status(400).json({ message: 'Doctor already exists' });
    }
    const doctor = await doctorService.createDoctor(name, specialty, email);
    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};