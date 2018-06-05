const router = require('express').Router();
const passport = require('passport');
const knex = require('../../db/knex');


// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ["profile", "email"]
}));


// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
   res.redirect("/profile/");
});

//local login passport
router.post("/login", (req, res, next) => {
  passport.authenticate("local-login", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(404).json(info.message);

    req.logIn(user, err => {
      if (err) next(err);
      else {
        const user = JSON.parse(req.user);
        res.status(200).json(user[0]);
      }
    });
  })(req, res, next);
});

module.exports = router;
