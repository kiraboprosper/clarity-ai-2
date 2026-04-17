const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Google integration coming");
});

module.exports = router;