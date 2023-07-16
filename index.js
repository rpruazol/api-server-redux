'use strict'

const {init} = require('./src/server');
const {dbConnection} = require('./src/models/index')

// entrypoint of the app
// what is it doing?
// 1. sync database
// 2. start server via exported function

try{
  dbConnection
  // .drop()
  .sync({force:true})
  .then((res) => {
    console.log('models', res.models)
    init();

  })
} catch(e){
  console.error(e);
}
