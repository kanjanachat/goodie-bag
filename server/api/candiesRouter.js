const express = require('express');
const router = express.Router();
const Candy = require('../db/models/Candy');

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  } catch (error) {
    next(error);
  }
});

module.exports = router