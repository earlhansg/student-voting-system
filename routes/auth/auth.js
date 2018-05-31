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


module.exports = router;
