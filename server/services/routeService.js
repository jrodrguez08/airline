const Route = require('../models/routeModel');
const databaseService = require('./helpers/databaseService');

module.exports.getRoutes = () => {
  return databaseService.getAllEntities(Route);
};

module.exports.createRoute = (route) => {
  return databaseService.createEntity(Route, route);
};