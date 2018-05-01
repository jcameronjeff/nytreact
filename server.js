const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoOptions = {
  autoReconnect: true
}
// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://jcameronjeff:Brain1304@ds257579.mlab.com:57579/nytimesreact", mongoOptions)
  .then(() => {/** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log("Mongoose Connected")
  }, err => {
    throw err
  });;

// Send every request to the React app Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
