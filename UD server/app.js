const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userRoutes = require('./routes/user.routes');
const cors = require('cors');
const contactEmailRoutes = require('./routes/contactEmail.routes');
const adminRoutes = require('./routes/admin.routes');
const connectDB = require('./config/db');
const { connect } = require('mongoose');

connectDB()

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "http://localhost:8080",
      "https://umbrelladesk.netlify.app",
      "https://umbrelladesk.com",
      "https://udadmin.netlify.app",
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use('/api/contact', contactEmailRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/admin', adminRoutes);



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});