'use strict';

const Sequelize = require('sequelize')

const dbConnection = new Sequelize(process.env.POSTGRES_URI)


module.exports = {dbConnection}