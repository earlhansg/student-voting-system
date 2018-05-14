const router = require('express').Router();
const passport = require('passport');
const knex = require('../../db/knex');


// auth login
// router.get('/login', (req, res) => {
//     res.redirect("http://localhost:4200");
// });


// auth logout
// router.get('/logout', (req, res) => {
//     // handle with passport
//     res.redirect("http://localhost:4200/dashboard");
// });


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


// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ["profile", "email"]
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
    const googleEmail = req.user.emails[ 0 ].value;

    knex.select().table('admin')
      .where({
        email: googleEmail
      })
      .then(admin => {
        console.log(admin)
        if(JSON.stringify(admin) === '[]') {
          knex.select().table('student')
            .where({
              email: googleEmail
            })
            .then(data => {
              console.log(data);
              if(JSON.stringify(data) === '[]') {
                res.redirect("http://localhost:4200");
              }
              else {
                res.redirect("/student/");
              }
            })
            .catch(function(err){
              res.status(500).json({
                error:true,
                data:{
                  message:err.message
                }
              });
              res.redirect("http://localhost:4200");
            });

        }
        else {
          res.redirect("/admin/");
          // res.redirect("http://localhost:4200");
        }

      })
      .catch(function(err){
        res.status(500).json({
          error:true,
          data:{
            message:err.message
          }
        });
        res.redirect("http://localhost:4200");
      });

});

module.exports = router;
