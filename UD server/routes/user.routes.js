const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post(
  "/register",
  body("username").trim(),
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Invalid Data" });
    }

    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const User = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(200).json({ message: "User created", User });
  }
);

router.post(
  "/login",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid email or password",
      });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, name: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "12h",
      }
    );
// ✅ Send token in cookie (optional)
    res.cookie("token", token, {
      maxAge: 12 * 60 * 60 * 1000, // 12 hours
      httpOnly: true,
      sameSite: "None", // If frontend is hosted on different origin
      secure: true,     // Required for cross-site cookies
    });

    
   // ✅ Send token in response body (required by your frontend)
    res.status(200).json({
      message: "Login successful",
      token: token, // ✅ This line is the fix
    });
  }
);

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
});

router.get("/check-auth", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
    // console.log("Unauthorized access attempt");
    
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
      // console.log("Token verification failed:", err.message);
    }
    res.status(200).json({ userId: decoded.userId, email: decoded.email, name: decoded.name, message: "User is authenticated" });
  });
});

module.exports = router;
