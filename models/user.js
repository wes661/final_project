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
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  appointments: [
    {
      name: {
        type: String,
        required: true
      },
      where: {
        type: String,
        required: true
      },
      when: {
        type: Date,
        required: true
      }
    }
  ],
  meds: [
    {
      name: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
