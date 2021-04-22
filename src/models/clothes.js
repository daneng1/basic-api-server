'use strict';

const FoodModel = require('./food.js');

class ClothesModel extends FoodModel {
  constructor(id, record){
    super(0,[])
  }
}

module.exports = ClothesModel;
