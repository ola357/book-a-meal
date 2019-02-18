'use strict';

// const express = require('express');
// const parties = require('./routes/parties');
// const offices = require('./routes/offices');
var express = require('express');

var app = express();

app.use(express.json());
// app.use('/api/v1/parties', parties);
// app.use('/api/v1/offices', offices);


var port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
var server = app.listen(port, function () {
  return console.log('Listening on port ' + port + '...');
});
module.exports = server;