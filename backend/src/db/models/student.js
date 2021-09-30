'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      program: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Student.associate = function (models) {
    // associations can be defined here
  };
  return Student;
};
