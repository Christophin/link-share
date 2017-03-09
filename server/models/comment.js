'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    link_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comment;
};