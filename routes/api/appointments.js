//Appointment routes
const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

// Matches with "/api/appointments"
router.route("/").get(appointmentController.findAll);

module.exports = router;
