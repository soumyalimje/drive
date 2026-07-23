const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { saveReturnTo } = require("../middleware.js");
const userController = require("../controllers/users.js");
const user = require("../models/user.js");

// Register Route
router.route("/register")
  .get(userController.rendersignup)
  .post(wrapAsync(userController.signup));

// Login Route
router.route("/login")
  .get(userController.renderlogin)
  .post(
    saveReturnTo,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    userController.login
  );


// Logout Route
router.get("/logout", userController.logout);

module.exports = router;