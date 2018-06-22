const router = require("express").Router();
const userRoutes = require("./users");
const medRoutes = require("./meds");
const appointmentRoutes = require("./appointments");

// User routes
router.use("/users", userRoutes);

// Medication routes
router.use("/meds", medRoutes);

// Appoinment routes
router.use("/appointments", appointmentRoutes);

module.exports = router;
