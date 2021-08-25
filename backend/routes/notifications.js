const mongoose = require("mongoose");
const express = require("express");
const Notification = require("../models/notification");
const User = require("../models/user");
const router = express.Router();

router.post("/getRandomNotification", async (req, res) => {
  const marked = [];
  const currUser = await User.findById(req.body.currUserId);

  if (req.body.currNotificationId) {
    marked.push(new mongoose.Types.ObjectId(req.body.currNotificationId));
  }

  if (currUser && currUser.removedNotifications.length > 0) {
    currUser.removedNotifications.map((id) =>
      marked.push(new mongoose.Types.ObjectId(id))
    );
  }
  Notification.aggregate([
    {
      $match: {
        _id: {
          $nin: marked,
        },
      },
    },
    { $sample: { size: 1 } },
  ])
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
