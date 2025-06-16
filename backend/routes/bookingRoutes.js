const express = require('express');
const { createBooking, getMyAppointments, updateBookingStatus } = require('../controllers/bookingController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createBooking);
router.get('/my', auth, getMyAppointments);
router.patch('/:id/status', auth, updateBookingStatus);

module.exports = router;