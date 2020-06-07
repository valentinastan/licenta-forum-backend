'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reaction = sequelize.define('Reaction', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER,
    reactionType: DataTypes.STRING
  }, {});
  Reaction.associate = function(models) {
    // Reaction.belongsTo(models.User);
    // Reaction.belongsTo(models.Post);
    // Reaction.belongsTo(models.Comment);
  };
  return Reaction;
};
