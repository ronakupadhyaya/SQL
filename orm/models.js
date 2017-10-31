"use strict";

const Sequelize = require('sequelize');
const sequelize = new Sequelize('orm', process.env.USER || process.env.USERNAME, null, {
  dialect: 'postgres'
  // operatorsAliases: Sequelize.Op
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

const Post = sequelize.define('post', {
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

Post.belongsTo(User);

// sequelize.sync({ force: true});
sequelize.sync();

module.exports = {
  User,
  Post
};
