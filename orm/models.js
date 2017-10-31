"use strict";

const Sequelize = require('sequelize');
const sequelize = new Sequelize('orm', process.env.USER || process.env.USERNAME, null, {
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync();

module.exports = {
  User
};
