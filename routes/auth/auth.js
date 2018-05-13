const router = require('express').Router();
const passport = require('passport');


// auth login
router.get('/login', (req, res) => {
    res.redirect("http://localhost:4200");
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.redirect("http://localhost:4200/dashboard");
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
    res.redirect('/profile/');
});

module.exports = router;
