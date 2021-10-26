'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./user.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const options =
  process.env.NODE_ENV === 'production'
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, options);

const userTable = userModel(sequelizeInstance, DataTypes);

module.exports = {
  database: sequelizeInstance,
  users: userTable,
};
