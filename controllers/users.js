const User = require("../models/user");



module.exports.renderlogin = (req, res) => {
  return res.render("users/login.ejs");
}
module.exports.rendersignup = (req, res) => {
  return res.render("users/register.ejs");
}

module.exports.signup=async (req, res, next) => {
    try {
      let { email, username, password } = req.body;
      const user = new User({ email, username });
      const newUser = await User.register(user, password);

      req.login(newUser, (err) => {
        if (err) return next(err);
        req.flash("success", "Welcome to DriveGo!");
        return res.redirect(req.session.returnTo || "/listings" );
      });
    } catch (e) {
      req.flash("error", e.message);
      return res.redirect("/register");
    }
  }
module.exports.login =  async(req, res) => {
    req.flash("success", "Welcome back!");
    const redirectUrl = req.session.returnTo || "/listings";
    delete req.session.returnTo;
    return res.redirect(res.locals.returnTo || redirectUrl);
  }
  module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Goodbye!");
    return res.redirect("/listings");
  });
}