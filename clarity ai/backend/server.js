require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const { startNotifications } = require("./services/notificationEngine");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
startNotifications();

// ROUTES
app.use("/api/tasks", require("./routes/tasks"));
app.use("/api/ai", require("./routes/ai"));
app.use("/api/planner", require("./routes/planner"));
app.use("/api/notifications", require("./routes/notifications"));
app.use("/api/google", require("./routes/google"));

app.get("/", (req, res) => {
  res.send("Clarity AI running 🚀");
});

app.listen(5000, () => console.log("Server running on port 5000"));