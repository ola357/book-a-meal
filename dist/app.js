'use strict';

var express = require('express');
var meals = require('../routes/meals');
var menu = require('../routes/menu');
var orders = require('../routes/orders');

var app = express();

app.use(express.json());
app.use('/api/v1/meals', meals);
app.use('/api/v1/menu', menu);
app.use('/api/v1/orders', orders);

var port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
var server = app.listen(port, function () {
  return console.log('Listening on port ' + port + '...');
});
module.exports = server;