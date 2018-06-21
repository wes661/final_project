//Med routes
const router = require("express").Router();
const medController = require("../../controllers/medController");

// Matches with "/api/meds"
router.route("/").get(medController.findAll);

module.exports = router;
