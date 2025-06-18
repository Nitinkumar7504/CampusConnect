const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Correct CORS setup
app.use(cors({
  origin: "https://campusconnect-frontend.onrender.com",
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

// Connect to DB and Start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log('🚀 Server running on port', process.env.PORT || 5000)
  );
})
.catch(err => console.error('❌ DB connection error:', err));
