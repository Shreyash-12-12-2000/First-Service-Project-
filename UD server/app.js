const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userRoutes = require('./routes/user.routes');
const cors = require('cors');
const contactEmailRoutes = require('./routes/contactEmail.routes');
const adminRoutes = require('./routes/admin.routes');
const connectDB = require('./config/db');

connectDB()

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ CORS (keep this before routes)
const allowedOrigins = [
  "http://localhost:5173",                        // for local dev
  "https://umbrelladesk.netlify.app",            // your deployed site
  "https://umbrelladesk.com",                    // if using custom domain
  "https://udadmin.netlify.app"                  // if you have admin UI
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// ✅ 🔍 ADD THIS DEBUG MIDDLEWARE HERE
app.use((req, res, next) => {
  console.log("🍪 Cookies received on request:", req.cookies);
  next();
});

// ✅ Routes
app.use('/api/contact', contactEmailRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/admin', adminRoutes);

// ✅ Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
