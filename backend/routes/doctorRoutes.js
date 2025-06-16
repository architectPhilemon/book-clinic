const express = require('express');
const { getDoctors, getDoctorAppointments, registerDoctor } = require('../controllers/doctorController');
const router = express.Router();

router.get('/', getDoctors);
router.get('/:doctorId/appointments', getDoctorAppointments);
router.post('/register', registerDoctor);

module.exports = router;