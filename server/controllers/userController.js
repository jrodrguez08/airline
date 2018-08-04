const processResponseWith = require('./helpers/processResponse');
const userService = require('../services/userService');

module.exports.createUser = (req, res) => {
  processResponseWith(res, userService.createUser, req.body);
};