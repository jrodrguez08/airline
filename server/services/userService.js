const User = require('../models/userModel');
const LocalStrategy = require('passport-local').Strategy;
const databaseService = require('./helpers/databaseService');

module.exports.createUser = (user) => {
  const newUser = User(user);
  newUser.password = newUser.generateHash(user.password);
  return databaseService.createEntity(User, newUser);
};