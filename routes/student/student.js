const router = require('express').Router();
const knex = require ('../../db/knex');

router.get('/getUserProfile', (req, res) => {
const userValue = JSON.stringify(req.user);

  if(req.isAuthenticated()) {
    const userResponse = JSON.parse(userValue);
    const currentUser = userResponse[ 0 ];

    const user = {
      id       : currentUser.id,
      firstName: currentUser.firstname,
      lastName : currentUser.lastname,
      email    : currentUser.email,
      gender   : currentUser.gender
    };
    res.json(user);
  }
    else res.redirect("http://localhost:4200");
});

// auth login
router.get('/', (req, res) => {
  res.redirect("http://localhost:4200/initialize");
});




module.exports = router;
