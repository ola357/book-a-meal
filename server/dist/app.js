'use strict';

var express = require('express');
// const express = require('express');
var meals = require('../routes/meals');
// const offices = require('./routes/offices');


var app = express();

app.use(express.json());
app.use('/api/v1/meals', meals);
// app.use('/api/v1/offices', offices);
// eslint-disable-next-line no-unused-vars


var port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
var server = app.listen(port, function () {
  return console.log('Listening on port ' + port + '...');
});
module.exports = server;