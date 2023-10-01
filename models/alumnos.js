'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumnos = sequelize.define('alumnos', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {});
  alumnos.associate = function(models) {
    // associations can be defined here
  };
  return alumnos;
};