const mongoose = require("mongoose");

const GoogleAuthSchema = new mongoose.Schema({
  access_token: String,
  refresh_token: String
});

module.exports = mongoose.model("GoogleAuth", GoogleAuthSchema);