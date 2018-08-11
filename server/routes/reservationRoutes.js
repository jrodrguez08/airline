const express = require('express');
const reservationController = require('../controllers/reservationController');
const reservationRouter = express.Router();

reservationRouter.route('/')
  .get(reservationController.getReservations);

reservationRouter.route('/')
  .post(reservationController.createReservation);

module.exports = reservationRouter;