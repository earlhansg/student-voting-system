const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const keys = require ("./keys");
const knex = require ('../db/knex');
const bcrypt = require('bcrypt-nodejs');


passport.serializeUser((user, done) => {
  const currentUser = JSON.parse(user);
  done(null, currentUser[ 0 ].id);
});

passport.deserializeUser((user_id, done) => {
  knex
    .select()
    .table('user')
    .where({ id: user_id })
    .then(function(user){
      done(null, user);
    })
});

passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      return knex
        .select()
        .table('user')
        .where({ googleId: profile.id })
        .then(user => user.length > 0 ? done(null, JSON.stringify(user)) : createUser(profile, done));
      });
    })
);

passport.use('local-login', new LocalStrategy({
  usernameField : 'username',
  passwordField : 'password',
  passReqToCallback : true
}, (req, username, password, done) => processUser({username, password}, done)));



function processUser(profile, done) {
  return findUserByEmailPassword(profile, done);
}

function findUserByEmailPassword({username, password}, done) {
  return knex
    .select()
    .table('user')
    .where({ email: username })
    .then(result => {
      const output = JSON.stringify(result);
      const account = JSON.parse(output);

      if (account.length > 0) {
        const isPasswordValid = bcrypt.compareSync(password, account[ 0 ].password);

        if (isPasswordValid) return done(null, output);
        else return done(null, false, { message: "Invalid Password" });
      }
      else return done(null, false, { message: "User not found" });
    })
    .catch(err => done(err));
}

function createUser(profile, done) {
  const user = {
    googleId : profile.id,
    firstname: profile.name.givenName,
    lastname : profile.name.familyName,
    email    : profile.emails[ 0 ].value
  };

  return knex('user')
    .insert(user)
    .returning('*')
    .into('user')
    .then(newUser => done(null, JSON.stringify(newUser)));
}
