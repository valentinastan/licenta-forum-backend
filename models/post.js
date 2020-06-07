'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    //Post.belongsTo(models.User);
    //Post.hasMany(models.Reaction);
    Post.hasMany(models.Comment)
    //Post.hasMany(models.Notification)
  };
  return Post;
};
