const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // Additional fields for admin management
  attendance: {
    type: Number,
    default: 0
  },
  announcements: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('User', userSchema);
