'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER,
    sentiment: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    //Comment.belongsTo(models.User);
    Comment.belongsTo(models.Post);
    Comment.hasMany(models.Reaction);
  };
  return Comment;
};
