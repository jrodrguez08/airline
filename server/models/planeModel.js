const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaneModel = new Schema({
  model: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Plane', PlaneModel);