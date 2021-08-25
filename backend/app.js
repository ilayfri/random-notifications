const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const notificationsRequests = require("./routes/notifications");
const usersRequests = require("./routes/users");
app.use(cors());

app.use(bodyParser.json());
secret = "quonderDemoSecret14-03";

//chrome exp handle
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  next();
});

// set connection to DB
mongoose
  .connect(
    "mongodb+srv://DB:ilayfRi140!@db.lhbvh.mongodb.net/assignmentDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(4000, () => console.log("App listening on port 4000"));
  })
  .catch((err) => {
    console.log(err);
  });

app.use(notificationsRequests);
app.use(usersRequests);
