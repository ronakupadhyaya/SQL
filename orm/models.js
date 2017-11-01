"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize('orm', process.env.USER || process.env.USERNAME, null, {
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

// TODO remove solution
var User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

var Post = sequelize.define('post', {
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

Post.belongsTo(User);

module.exports = {
  User,
  Post
};
