const bookingService = require('../services/bookingService');

exports.createBooking = async (req, res) => {
  try {
    const booking = await bookingService.createBooking(
      req.user.id,
      req.body.doctor,
      req.body.date,
      req.body.time
    );
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMyAppointments = async (req, res) => {
  try {
    const bookings = await bookingService.getUserBookings(req.user.id);
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await bookingService.updateBookingStatus(req.params.id, req.body.status);
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};