const express = require('express');
const { validateGenre } = require("../middleware/validateGenre");

const router = express.Router();

const meals = [
  { id: 1, name: 'Jollof rice' },
  { id: 2, name: 'Fried rice' },
  { id: 3, name: 'Semo and Egusi' },
];

router.get('/', (req, res) => {
  res.send(meals);
});

router.post('/', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const meal = {
    id: meals.length + 1,
    name: req.body.name,
  };
  meals.push(meal);
  res.send(meal);
});

router.put('/:id', (req, res) => {
  const meal = meals.find(c => c.id === parseInt(req.params.id, 10));
  if (!meal) return res.status(404).send('The meal with the given ID was not found.');

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  meal.name = req.body.name;
  res.send(meal);
});

router.delete('/:id', (req, res) => {
  const meal = meals.find(c => c.id === parseInt(req.params.id, 10));
  if (!meal) return res.status(404).send('The meal with the given ID was not found.');

  const index = meals.indexOf(meal);
  meals.splice(index, 1);

  res.send(meal);
});

router.get('/:id', (req, res) => {
  const meal = meals.find(c => c.id === parseInt(req.params.id, 10));
  if (!meal) return res.status(404).send('The meal with the given ID was not found.');
  res.send(meal);
});

module.exports = router;
