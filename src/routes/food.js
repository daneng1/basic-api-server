'use strict';

const express = require('express');

const Food = require('../models/food.js');
const foods = new Food;

const router = express.Router();

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

function getFood(req, res) {
  let getAllFood = foods.read();
  res.status(200).json(getAllFood);
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let theFood = foods.read(id);
  res.status(200).json(theFood);
}

function createFood(req,res) {
  let content = req.body;
  let createdFood = foods.create(content);
  res.status(201).json(createdFood);
}

function updateFood(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let theFood = foods.update(id, content);
  res.status(200).json(theFood);
}

function deleteFood (req, res) {
  const id = parseInt(req.params.id);
  let deletedFood = foods.delete(id);
  res.status(200).json({msg: `${deletedFood} was deleted`});
}

module.exports = router;
