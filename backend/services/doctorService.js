const Doctor = require('../models/doctor');

exports.getDoctors = async () => {
  return await Doctor.find();
};

exports.createDoctor = async (name, specialty, email) => {
  return await Doctor.create({ name, specialty, email });
};