require('./config/config')
require('./db/connection')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./routes/index')

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)



app.listen(process.env.PORT, function (err) {
  console.log(`Escuchando en el puerto ${process.env.PORT}`)
});
