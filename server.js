//starting server
var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var env = require("dotenv").load();
//Models
var models = require("./models");

//Sync Database
models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database's Dope");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.get("/", function(req, res) {
  res.send("Welcome to Pill Heads!");
});

app.use("/api", require("./routes/api"));

app.listen(3000, function(err) {
  if (!err) console.log("Site is connected to PORT: 3000");
  else console.log(err);
});
