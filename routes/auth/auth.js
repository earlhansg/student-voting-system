const express = require('express');
const router = express.Router();
const passport = ('passport');


router.get('/google', passport.authenticate('google', {
  scope:['profile']
}));

module.exports = router;
