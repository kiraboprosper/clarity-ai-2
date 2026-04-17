const express = require("express");
const router = express.Router();
const { generatePlan } = require("../services/lifeplanner");

router.get("/", async (req, res) => {
  const plan = await generatePlan();
  res.json(plan);
});

module.exports = router;