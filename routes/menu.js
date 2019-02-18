const express = require('express');
const { validateGenre } = require("../middleware/validateGenre");

const router = express.Router();

const menu = [
  { id: 1, name: 'Jollof rice' },
  { id: 2, name: 'Fried rice' },
  { id: 3, name: 'Semo and Egusi' },
];

router.get('/', (req, res) => {
  res.send(menu);
});

router.post('/', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const meal = {
    id: menu.length + 1,
    name: req.body.name,
  };
  menu.push(meal);
  res.send(meal);
});

module.exports = router;
