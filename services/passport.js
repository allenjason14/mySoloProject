var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var User = require('../model/userModel');

passport.use(new localStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, done) {
  User.findOne({email: email})
  .exec(function(err, user) {
    if(err) done(err);
    if(!user) return done(null, false);
    if(user.verifyPassword(password)) return done(null, user);
  return done(null, false);
});
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(_id, done) {
  User.findById(_id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
