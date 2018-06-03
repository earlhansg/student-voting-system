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
router.post('/login', passport.authenticate('local'), (req,res) => {
  console.log('passport');
});

module.exports = router;
