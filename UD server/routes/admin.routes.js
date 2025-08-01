const express = require('express');
const router = express.Router();

router.get('/url', (req, res) => {
  // Send admin URL from env, but ideally add authentication here!
  const adminUrl = process.env.ADMIN_URL;

  if (!adminUrl) {
    return res.status(500).json({ error: "Admin URL not configured" });
  }

  res.json({ adminUrl });
});

module.exports = router;
