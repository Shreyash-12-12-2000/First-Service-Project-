const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');


// Routes
const userRoutes = require('./routes/user.routes');
const contactEmailRoutes = require('./routes/contactEmail.routes');
const adminRoutes = require('./routes/admin.routes');

// DB Connection
const connectDB = require('./config/db');
connectDB();

const app = express();

// ✅ CORS Setup
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "http://localhost:8080",
      "https://umbrelladesk.netlify.app",
      "https://udadmin.netlify.app",
      "https://umbrelladesk.com",
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// ✅ Use CORS Middleware
app.use(cors(corsOptions));

// ✅ Handle Preflight (OPTIONS) Requests
app.options('*', cors(corsOptions));

// ✅ Body & Cookie Parsers
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use('/api/contact', contactEmailRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/admin', adminRoutes);

// ✅ Start Server (with PORT fallback)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
