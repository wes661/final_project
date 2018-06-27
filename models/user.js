const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  appointments: [
    {
      where: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      doctor: {
        type: String,
        required: true
      },
      copay: {
        type: String,
        required: false
      },
      comments: {
        type: String,
        required: false
      }
    }
  ],
  meds: [
    {
      name: {
        type: String,
        required: true
      },
      day: {
        type: String,
        required: true
      },
      quantity: {
        type: String,
        required: true
      },
      frequency: {
        type: String,
        required: true
      },
      shape: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
