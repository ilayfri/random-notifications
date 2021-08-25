const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  removedNotifications: {
    type: [Object],
    required: true,
  },
});

module.exports = mongoose.model("Users", UserSchema, "Users");
