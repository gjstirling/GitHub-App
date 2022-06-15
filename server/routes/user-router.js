const express = require("express");
const router = express.Router();
const User = require("../middleware/user-middleware.js");

router.post("/", User.validateUser, User.createUser);
router.post("/login", User.verifyUser);

module.exports = router;
