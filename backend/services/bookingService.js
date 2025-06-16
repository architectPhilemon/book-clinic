const Booking = require('../models/booking');

exports.createBooking = async (userId, doctor, date, time) => {
  return await Booking.create({ user: userId, doctor, date, time });
};

exports.getUserBookings = async (userId) => {
  return await Booking.find({ user: userId });
};

exports.getDoctorBookings = async (doctorId) => {
  return await Booking.find({ doctor: doctorId });
};

exports.updateBookingStatus = async (bookingId, status) => {
  const booking = await Booking.findById(bookingId);
  if (!booking) throw new Error('Booking not found');
  booking.status = status;
  return await booking.save();
};