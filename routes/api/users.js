//User routes
const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/").get(userController.findAll);

module.exports = router;
