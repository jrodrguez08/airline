const authController = require('../controllers/authController');

module.exports = (app, passport) => {

  app.get('/login', passport.authenticate('local'));

  app.get('/logout', authController.logout);

};
