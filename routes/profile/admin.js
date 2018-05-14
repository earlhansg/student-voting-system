const router = require('express').Router();
const knex = require ('../../db/knex');

// router.get('/getUserProfile', (req, res) => {
//   if (req.isAuthenticated()) {
//   const userResponse = req.user;
//
//   const user = {
//     id: userResponse.id,
//     firstName: userResponse.name.givenName,
//     lastName: userResponse.name.familyName,
//     email: userResponse.emails[ 0 ].value,
//     gender: userResponse.gender,
//     provider: userResponse.provider
//   };
//
//   res.json(user);
// }
//   else res.redirect("http://localhost:4200");
// });


// const authCheck = (req, res, next) => {
//   if(!req.user){
//     res.redirect('http://localhost:4200');
//   }
//   else {
//     next();
//   }
// }

const authCheck = (req, res, next) => {
  if(!req.user){
    res.redirect('http://localhost:4200');
  }
  else {
    next();
  }
}

// auth login
router.get('/', (req, res) => {
  res.redirect("http://localhost:4200/dashboard");
   console.log(req.user);
});

// router.get('/', (req, res) => {
//     console.log(req.user);
// });


module.exports = router;
