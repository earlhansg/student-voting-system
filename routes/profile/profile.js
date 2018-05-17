const router = require('express').Router();
const knex = require ('../../db/knex');

router.get('/getUserProfile', (req, res) => {
  if (req.isAuthenticated()) {
  const userResponse = req.user;

  const user = {
    id: userResponse.id,
    firstName: userResponse.name.givenName,
    lastName: userResponse.name.familyName,
    email: userResponse.emails[ 0 ].value,
    gender: userResponse.gender,
    provider: userResponse.provider
  };

  res.json(user);
}
  else res.redirect("http://localhost:4200");
});

// auth login
router.get('/', (req, res) => {
  console.log(req.user);
  res.redirect("http://localhost:4200/initialize");
});




module.exports = router;
