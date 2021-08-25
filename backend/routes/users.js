const mongoose = require("mongoose");
const express = require("express");
const Notification = require("../models/notification");
const User = require("../models/user");
const router = express.Router();

router.post("/createUser", (req, res) => {
  User.create({ removedNotifications: [] })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/markNotification", (req, res) => {
  if (req.body && req.body.markedNotificationId && req.body.currUserId) {
    User.updateOne(
      { _id: req.body.currUserId },
      {
        $addToSet: {
          removedNotifications: new mongoose.Types.ObjectId(
            req.body.markedNotificationId
          ),
        },
      }
    )
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(400).send("missing/invalid arguments");
  }
});

module.exports = router;
