const express = require('express');
const planeController = require('../controllers/planeController');
const planeRouter = express.Router();

planeRouter.route('/')
  .get(planeController.getPlanes);

planeRouter.route('/')
  .post(planeController.createPlane);

module.exports = planeRouter;