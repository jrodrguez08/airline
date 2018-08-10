const processResponseWith = require('./helpers/processResponse');
const planeService = require('../services/planeService');

module.exports.getPlanes = (req, res) => {
  processResponseWith(res, planeService.getPlanes, null);
};

module.exports.createPlane = (req, res) => {
  processResponseWith(res, planeService.createPlane, req.body);
};
