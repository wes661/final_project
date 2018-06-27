import { truncate } from "fs";

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
