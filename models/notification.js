'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    seen: DataTypes.BOOLEAN
  }, {});
  Notification.associate = function(models) {
    //Notification.belongsTo(models.User);
    //Notification.belongsTo(models.Post);
  };
  return Notification;
};