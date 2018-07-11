const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const env = require("dotenv").config();

const users = require("./routes/api/users");

const app = express();

//Body parser middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : require("./config/keys").mongoURI;

app.use(express.static("client/build"));

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use routes
app.use("/api/users", users);
app.use("*", require("./client/build"));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
