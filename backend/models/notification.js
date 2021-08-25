const mongoose = require("mongoose");
const NotificationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model(
  "Notifications",
  NotificationSchema,
  "Notifications"
);
