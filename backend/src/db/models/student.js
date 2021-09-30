'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
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
