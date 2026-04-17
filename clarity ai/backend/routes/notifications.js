const express = require("express");
const router = express.Router();
const Notification = require("../models/notifications");

router.post("/", async (req, res) => {
  const notif = new Notification(req.body);
  await notif.save();
  res.json(notif);
});

module.exports = router;