import express, { json } from 'express';
import meals from './routes/meals';
import menu from './routes/menu';
import orders from './routes/orders';

const app = express();

app.use(json());
app.use('/api/v1/meals', meals);
app.use('/api/v1/menu', menu);
app.use('/api/v1/orders', orders);

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));
export default server;
