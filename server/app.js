const express = require('express');
// const express = require('express');
const meals = require('./routes/meals');
// const offices = require('./routes/offices');


const app = express();

app.use(express.json());
app.use('/api/v1/meals', meals);
// app.use('/api/v1/offices', offices);
// eslint-disable-next-line no-unused-vars

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));
module.exports = server;
