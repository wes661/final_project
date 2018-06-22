const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.med.findAll({}).then(function(meds) {
      console.log(meds);
      res.json(meds);
    });
  }
};
