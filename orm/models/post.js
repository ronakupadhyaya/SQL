'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Post.associate = function(models) {
    console.log('Associate', models);
    Post.belongsTo(models.User);
  };
  return Post;
};
