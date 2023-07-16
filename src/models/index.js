'use strict';

const {Sequelize, DataTypes} = require('sequelize')

require('dotenv').config();

const dbConnection = new Sequelize(process.env.POSTGRES_URI);
const boards = require('./board.model.js');
const notes = require('./notes.model.js');

const boardModel = boards(dbConnection, DataTypes);
console.log(boardModel)
const noteModel = notes(dbConnection, DataTypes);

// associations
noteModel.belongsTo(boardModel)
boardModel.hasMany(noteModel)


module.exports = {dbConnection}
