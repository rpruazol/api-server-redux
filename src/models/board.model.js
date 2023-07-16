'use strict';




const Boards = (dbConnection, DataTypes) => {
  return dbConnection.define('Boards', {
    name: {
      type: DataTypes.STRING
    },
    note_qty: {
      type: DataTypes.INTEGER
    }
  })
  console.log('a', a.belongsTo )
}

module.exports = Boards;