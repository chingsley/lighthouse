require('dotenv').config();
const logger = require('../../../file-logger');

module.exports = {
  development: {
    operatorsAliases: 0,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: 0,
    logging: logger.write,
  },
  test: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: '',
    operatorsAliases: '',
  },
  production: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: '',
    operatorsAliases: '',
  },
};
