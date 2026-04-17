const express = require("express");
const router = express.Router();
const { processCommand } = require("../services/aiengine");

router.post("/command", async (req, res) => {
  const { text } = req.body;
  const result = await processCommand(text);
  res.json(result);
});

module.exports = router;