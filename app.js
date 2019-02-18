const express = require('express');
const meals = require('./routes/meals');
const menu = require('./routes/menu');
const orders = require('./routes/orders');

const app = express();

app.use(express.json());
app.use('/api/v1/meals', meals);
app.use('/api/v1/menu', menu);
app.use('/api/v1/orders', orders);

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));
module.exports = server;
