const processResponseWith = require('./helpers/processResponse');
const authService = require('../services/authService');

module.exports.logout = (req, res) => {
  processResponseWith(res, authService.logout, req);
};