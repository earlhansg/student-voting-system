const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require ("./keys");
const knex = require ('../db/knex');

// passport.serializeUser((user, done) => {
//   let currentUser;
//   let result = user.map(function(checkUser){
//     if(checkUser.admin_id !== null){
//       currentUser = checkUser.admin_id;
//     }
//     else {
//       console.log("no user")
//     }
//   });
//   done(null, currentUser);
// });
//
// passport.deserializeUser((id, done) => {
//   knex.select().table('admin')
//     .where({
//       admin_id: id
//     })
//     .then(function(user){
//       done(null, user);
//     });
// })

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
})



passport.use(
  new GoogleStrategy({
    //options for the google strat
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'

  }, (accessToken, refreshToken, profile, done) => {

      done(null, profile);

  })
)
