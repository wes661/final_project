const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.appointment.findAll({}).then(function(appointments) {
      console.log(appointments);
      res.json(appointments);
    });
  }
};
