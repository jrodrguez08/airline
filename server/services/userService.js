const User = require('../models/userModel');
const LocalStrategy = require('passport-local').Strategy;
const databaseService = require('./helpers/databaseService');
const _ = require('lodash');

module.exports.createUser = (user) => {
  const newUser = User(user);
  newUser.password = newUser.generateHash(user.password);
  return databaseService.createEntity(User, newUser);
};

module.exports.getUserById = (user) => {
  return new Promise(
    (resolve, reject) => {
      databaseService.getOneEntity(User, {user: user})
        .then((user) => {
          if (_.isEmpty(user)) {
            resolve({});
          } else {
            resolve(user);
          }
        })
        .catch(reject);
    }
  );
};