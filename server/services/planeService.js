const Plane = require('../models/planeModel');
const databaseService = require('./helpers/databaseService');

module.exports.getPlanes = () => {
  return databaseService.getAllEntities(Plane);
};

module.exports.createPlane = (plane) => {
  return databaseService.createEntity(Plane, plane);
};