const userRouter = require('./userRoutes');
const planeRouter = require('./planeRoutes');
const routeRouter = require('./routeRoutes');
const authRoutes = require('./authRoutes');

module.exports = (app, passport) => {

  app.use('/user', userRouter);

  app.use('/plane', planeRouter);

  app.use('/route', routeRouter);

  authRoutes(app, passport);

};
