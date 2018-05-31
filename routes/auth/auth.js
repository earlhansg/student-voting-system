const router = require('express').Router();
const passport = require('passport');
const knex = require('../../db/knex');


// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ["profile", "email"]
}));

// callback route for google to redirect to
// router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
//     const googleEmail = req.user.email;
//     knex.select().table('user')
//     .where({
//       email: googleEmail
//     })
//     .then(user => {
//       if(JSON.stringify(user) === '[]'){
//         res.redirect("http://localhost:4200");
//       }
//       else {
//         res.redirect("/profile/");
//       }
//     })
//
// });


// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
   res.redirect("/profile/");
});


module.exports = router;
