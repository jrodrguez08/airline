const randomString = require('randomstring');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationModel = new Schema({
  route: {
    type: Object,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

UserModel.methods.generateCode = () => randomString.generate({
  length: 6,
  charset: 'alphabetic',
  capitalization: 'uppercase'
});

module.exports = mongoose.model('Reservation', ReservationModel);