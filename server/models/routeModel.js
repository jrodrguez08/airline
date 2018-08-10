const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RouteModel = new Schema({
  origin: {
    type: String,
    required: true
  },
  destiny: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Route', RouteModel);