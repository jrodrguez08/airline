const processResponseWith = require('./helpers/processResponse');
const routeService = require('../services/routeService');

module.exports.getRoutes = (req, res) => {
  processResponseWith(res, routeService.getRoutes, null);
};

module.exports.createRoute = (req, res) => {
  processResponseWith(res, routeService.createRoute, req.body);
};
