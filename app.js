var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("dotenv").config();

var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students');
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
//api: './routes/users.js'
const options = {
  swaggerDefinition: {
    openapi: `3.0.0`,
    info: {
      title: `Recuperacion Prueba Luis Cajas`,
      version: `1.0.0`,
    },
  },
  apis: [`./routes/*.js`],
};


const swaggerDocs = swaggerJsDoc(options)
console.log(swaggerDocs);
///
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/students', studentsRouter);



app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


module.exports = app;
