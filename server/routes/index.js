const userRouter = require('./userRoutes');
const planeRouter = require('./planeRoutes');
const routeRouter = require('./routeRoutes');

module.exports = (app) => {

  app.use('/user', userRouter);

  app.use('/plane', planeRouter);

  app.use('/route', routeRouter);

};
