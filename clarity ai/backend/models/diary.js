const mongoose = require("mongoose");

const DiarySchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Diary", DiarySchema);