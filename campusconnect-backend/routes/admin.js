
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Announcement = require('../models/Announcement');

router.get('/students', async (req, res) => {
  try {
    const students = await User.find().select('-password');
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error.message);
    res.status(500).json({ message: 'Failed to fetch student data' });
  }
});

router.put('/student/:id', async (req, res) => {
  try {
    const { attendance, announcements } = req.body;
    const updatedStudent = await User.findByIdAndUpdate(
      req.params.id,
      { attendance, announcements },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error(' Error updating student:', error.message);
    res.status(500).json({ message: 'Failed to update student' });
  }
});

router.post('/announcement', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }

    const newAnnouncement = new Announcement({ message });
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    console.error('Failed to post announcement:', error.message);
    res.status(500).json({ message: 'Failed to post announcement' });
  }
});

router.get('/announcements', async (req, res) => {
  try {
    const all = await Announcement.find().sort({ date: -1 });
    res.status(200).json(all);
  } catch (error) {
    console.error(' Failed to fetch announcements:', error.message);
    res.status(500).json({ message: 'Failed to fetch announcements' });
  }
});

module.exports = router;

