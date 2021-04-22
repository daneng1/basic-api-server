'use strict';

const express = require('express');

const Clothe = require('../models/clothes.js');
const clothes = new Clothe;

const router = express.Router();

router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

function getClothes(req, res) {
  let getAllClothes = clothes.read();
  res.status(200).json(getAllClothes);
}

function getOneClothes(req, res) {
  const id = parseInt(req.params.id);
  let theClothes = clothes.read(id);
  res.status(200).json(theClothes);
}

function createClothes(req,res) {
  let content = req.body;
  let createdClothes = clothes.create(content);
  res.status(201).json(createdClothes);
}

function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let theClothes = clothes.update(id, content);
  res.status(200).json(theClothes);
}

function deleteClothes (req, res) {
  const id = parseInt(req.params.id);
  let deletedClothes = clothes.delete(id);
  res.status(200).json({deletedClothes});
}

module.exports = router;
