const Reservation = require('../models/reservationModel');
const databaseService = require('./helpers/databaseService');

module.exports.getReservations = () => {
  return databaseService.getAllEntities(Reservation);
};

module.exports.createReservation = (reservation) => {
  const newReservation = Reservation(reservation);
  newReservation.id = Reservation.generateCode();
  return databaseService.createEntity(Reservation, reservation);
};