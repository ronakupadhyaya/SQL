"use strict";

// On Windows we needa DBPASSWORD
if (/^win/.test(process.platform) && ! process.env.DBPASSWORD) {
  console.log('You need to set DBPASSWORD in your env.sh file');
  process.exit(1);
}

var Sequelize = require('sequelize');
var sequelize = new Sequelize('guestbook', 'postgres', process.env.DBPASSWORD, {
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
