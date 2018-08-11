const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const usersService = require('./userService');

module.exports.init = (app, config) => {

  app.use(session({
    secret: config.session.secret,
    saveUninitialized: config.session.saveUninitialized,
    resave: config.session.resave
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new LocalStrategy((username, password, done) => {
      usersService.getUserById(username)
        .then((user) => {
          if (!user) {
            return done(null, false, {message: 'Incorrect username'});
          }
          if (!user.validPassword(password)) {
            return done(null, false, {message: 'Incorrect password'});
          }
          return done(null, user);
        })
        .catch((err) => {
          global.log('error', '%j', err);
        });
    }
  ));

  return passport;

};

module.exports.logout = (req) => {
  return new Promise(
    (resolve) => {
      req.logout();
      resolve({
        message: 'User logged out'
      });
    });
};