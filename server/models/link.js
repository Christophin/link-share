'use strict';
module.exports = function(sequelize, DataTypes) {
  var Link = sequelize.define('Link', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Link;
};