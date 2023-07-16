'use strict';

// server.js file has the express instance, the init function, the middleware, and the routes that we will be using

const express = require('express');
const app = express();
require('dotenv').config();


function init() {
  try {
    app.listen(PORT => {
      console.log(`now listening on port ${process.env.PORT}`);
    })
  } catch(e){
    console.log(e)
  }
};



module.exports = {init};