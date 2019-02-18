'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _meals = require('../routes/meals');

var _meals2 = _interopRequireDefault(_meals);

var _menu = require('../routes/menu');

var _menu2 = _interopRequireDefault(_menu);

var _orders = require('../routes/orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _express.json)());
app.use('/api/v1/meals', _meals2.default);
app.use('/api/v1/menu', _menu2.default);
app.use('/api/v1/orders', _orders2.default);

var port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
var server = app.listen(port, function () {
  return console.log('Listening on port ' + port + '...');
});
exports.default = server;