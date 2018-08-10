const express = require('express');
const routeController = require('../controllers/routeController');
const routeRouter = express.Router();

routeRouter.route('/')
  .get(routeController.getRoutes);

routeRouter.route('/')
  .post(routeController.createRoute);

module.exports = routeRouter;