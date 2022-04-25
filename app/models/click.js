'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Click extends Model {}
  Click.init({
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Click',
  });
  return Click;
};