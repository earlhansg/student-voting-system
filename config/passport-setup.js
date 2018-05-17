const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require ("./keys");
const knex = require ('../db/knex');


passport.serializeUser((currentUser, done) => {
  done(null, currentUser.email);
});

passport.deserializeUser((myEmail, done) => {
  console.log(myEmail);
  knex.select().table('user')
    .where({
      email: myEmail
    })
    .then(function(user){
      console.log(user);
      done(null, user);
    })

})



passport.use(
  new GoogleStrategy({
    //options for the google strat
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'

  }, (accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      // done(null, profile);
      const googleEmail = profile.emails[ 0 ].value;

      process.nextTick(function(){
        knex.select().table('user')
        .where({
          email: googleEmail
        })
        .then(user => {
          if(JSON.stringify(user) === '[]') {
            knex.select().table('user')
              .insert({
                googleId: profile.id,
                firstname: profile.name.givenName,
                lastname: profile.name.familyName,
                email: googleEmail
              })
              .then(function() {
                knex.select().table('user')
                  .where({
                    email: googleEmail
                  })
                  .then(function(newUser){
                    var data = JSON.stringify(newUser);
                    var curr = JSON.parse(data);
                    var currentUser = curr[ 0 ];
                    return done(null, currentUser);
                  });
              })
          } else {
            var data = JSON.stringify(user);
            var curr = JSON.parse(data);
            var currentUser = curr[ 0 ];
            return done(null, currentUser);
          }


        })
      });

  })
)
