import { Router } from 'express';
import { validateGenre } from "../middleware/validateGenre";

const router = Router();

const orders = [
  { id: 1, name: 'Jollof rice' },
  { id: 2, name: 'Fried rice' },
  { id: 3, name: 'Semo and Egusi' },
];

router.get('/', (req, res) => {
  res.send(orders);
});

router.post('/', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const order = {
    id: orders.length + 1,
    name: req.body.name,
  };
  orders.push(order);
  res.send(order);
});

router.put('/:id', (req, res) => {
  const order = orders.find(c => c.id === parseInt(req.params.id, 10));
  if (!order) return res.status(404).send('The order with the given ID was not found.');

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  order.name = req.body.name;
  res.send(order);
});

export default router;
