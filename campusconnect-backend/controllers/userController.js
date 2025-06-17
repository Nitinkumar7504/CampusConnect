const User = require('../models/User');

// Get all registered students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await User.find().select('-password'); // Don't send passwords
    res.json(students);
  } catch (err) {
    console.error('Error fetching students:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
