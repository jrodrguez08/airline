const authController = require('../controllers/authController');

module.exports = (app, passport) => {

  app.post('/login', passport.authenticate('local'));

  app.get('/logout', authController.logout);

};
