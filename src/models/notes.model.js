'use strict';


const Notes = (dbConnection, DataTypes) => {
  return dbConnection.define('Notes', {
    title:
    {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    board: {
      type: DataTypes.STRING
    }
  });
}

module.exports = Notes;