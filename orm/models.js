"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize('guestbook', process.env.USER || process.env.USERNAME, null, {
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define models here
// YOUR CODE HERE

module.exports = {
  // Export models here
  // YOUR CODE HERE
  sequelize,
  Sequelize
};
