'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post);
    User.hasMany(models.Notification);
    User.hasMany(models.Comment);
    User.hasMany(models.Reaction);
  };
  return User;
};
