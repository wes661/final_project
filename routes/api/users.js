const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateAppointmentInput = require("../../validation/appointment");

//Load User model
const User = require("../../models/User");

//@route  GET api/users/test
//@desc   Test users route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "users works" }));

//@route  POST api/users/register
//@desc   Register User
//@access Public

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: "",
        allergies: "",
        medicalAlerts: "",
        emergencyContact: "",
        emergencyNumber: "",
        appointments: [],
        meds: [],
        profile: []
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//@route  GET api/users/login
//@desc   Login User / Returning JWT Token
//@access Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // Find User by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User Matched

        const payload = {
          id: user.id,
          name: user.name,
          address: user.address,
          allergies: user.allergies,
          medicalAlerts: user.medicalAlerts,
          emergencyContact: user.emergencyContact,
          emergencyNumber: user.emergencyNumber,
          meds: user.meds,
          appointments: user.appointments,
          profile: user.profile
        }; //Create JWT payload

        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password Incorrect";
        res.status(400).json(errors);
      }
    });
  });
});

//@route  GET api/users/current
//@desc   Return current user
//@access Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      address: req.user.address,
      allergies: req.user.allergies,
      medicalAlerts: req.user.medicalAlerts,
      emergencyContact: req.user.emergencyContact,
      emergencyNumber: req.user.emergencyNumber,
      email: req.user.email,
      appointments: req.user.appointments,
      meds: req.user.meds,
      profile: req.user.profile
    });
  }
);

//@route  GET api/users/current
//@desc   Return current user
//@access Private

router.get(
  "/appointment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      where: req.body.where,
      date: req.body.date,
      time: req.body.time,
      doctor: req.body.doctor,
      copay: req.body.copay,
      comments: req.body.comments
    });
  }
);

//@route  POST api/users/appointments
//@desc   Post new appointment
//@access Private

router.post(
  "/appointments",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateAppointmentInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    //Get fields
    // console.log(req.user);
    User.findOne({ _id: req.user._id })
      .then(user => {
        // console.log(user);
        const newAppointment = {
          where: req.body.where,
          date: req.body.date,
          time: req.body.time,
          doctor: req.body.doctor,
          copay: req.body.copay,
          comments: req.body.comments
        };

        //Add to appointment array

        user.appointments.unshift(newAppointment);

        user
          .save()
          .then((user = res.json(user)))
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
);

//@route  POST api/users/meds
//@desc   Post new med
//@access Private

router.post(
  "/meds",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Get fields
    console.log(req.user);
    User.findOne({ _id: req.user._id }).then(user => {
      console.log(user);
      const newMed = {
        name: req.body.name,
        day: req.body.days,
        quantity: req.body.quantity,
        frequency: req.body.frequency,
        shape: req.body.shape,
        color: req.body.color
      };

      //Add to meds array

      user.meds.unshift(newMed);

      user.save().then((user = res.json(user)));
    });
  }
);

//@route  GET api/users/appointments
//@desc   Return appointments
//@access Private

router.get(
  "/appointments",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      appointments: req.user.appointments
    });
  }
);

//@route  GET api/users/meds
//@desc   Return meds
//@access Private

router.get(
  "/meds",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      meds: req.user.meds
    });
  }
);

router.post(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileFields = {};
    if (req.body.name) profileFields.name = req.body.name;
    if (req.body.address) profileFields.address = req.body.address;
    if (req.body.allergies) profileFields.allergies = req.body.allergies;
    if (req.body.medicalAlerts)
      profileFields.medicalAlerts = req.body.medicalAlerts;
    if (req.body.emergencyContact)
      profileFields.emergencyContact = req.body.emergencyContact;
    if (req.body.emergencyNumber)
      profileFields.emergencyNumber = req.body.emergencyNumber;

    User.findByIdAndUpdate({ _id: req.user._id }).then(user => {
      if (user) {
        User.findByIdAndUpdate(
          { _id: req.user._id },
          { $set: profileFields },
          { new: true }
        ).then(user => res.json(user));
      }
    });
  }
);

module.exports = router;
