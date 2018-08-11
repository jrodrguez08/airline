const processResponseWith = require('./helpers/processResponse');
const reservationService = require('../services/reservationService');

module.exports.getReservations = (req, res) => {
  processResponseWith(res, reservationService.getReservations, null);
};

module.exports.createReservation = (req, res) => {
  processResponseWith(res, reservationService.createReservation, req.body);
};
