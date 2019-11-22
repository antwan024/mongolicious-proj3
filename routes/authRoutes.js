const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //handles the case where user visits auth/google/callback. turn the code into an actual profile. exchange the code for the user profile
  app.get("/auth/google/callback", passport.authenticate("google"));
  // res.re('landing') in a function****************************************
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
