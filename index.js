const express = require('express');
const userRoute = require('./src/routes/user.route')
const app = express();

app.use("/", userRoute)
//ROTA 3 
// METHOD HTTP (CRUD (create, read, update, delete))
  //GET - PEGA UMA INFO
  //POST - CRIA UMA INFO
  //PUT - ALTERA TODA A INFO
  //PATH - ALTERA PARTE DA INFO 
  //DELETE - APAGA UMA INFO
// NAME
// FUNCTION (CALLBACK)

app.listen(3000);