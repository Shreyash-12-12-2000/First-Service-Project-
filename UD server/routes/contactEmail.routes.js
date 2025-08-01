const express = require("express");
const router = express.Router();
const Email = require("../models/email.model");
const { body, validationResult } = require("express-validator");

router.post(
  "/sendEmail",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("subject").notEmpty().withMessage("Subject is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, subject, message } = req.body;

    try {
      const newEmail = await Email.create({
        name,
        email,
        phone,
        subject,
        message,
      });
      res.status(200).json({ message: "Email sent successfully", newEmail });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

router.get("/getEmails", async (req, res) => {
    try {
        const emails = await Email.find().sort({ createdAt: -1 });
        res.status(200).json(emails);
    } catch (error) {
        console.error("Error fetching emails:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEmail = await Email.findByIdAndDelete(id);

    if (!deletedEmail) {
      return res.status(404).json({ message: "Email not found" });
    }

    res.status(200).json({ message: "Email deleted successfully" });
  } catch (error) {
    console.error("Error deleting email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



module.exports = router;