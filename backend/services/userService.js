const User = require('../models/user');

exports.createUser = async (name, email, password) => {
  return await User.create({ name, email, password });
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};