'use strict';

class FoodModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }
    
    this.db.push(record);
    return record;
  }

  read(id) {

    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  update(id, obj) {
    let idx = this.db.indexOf(this.read(id));
    this.dv[idx].record = obj;
    return this.db[idx];
  }

  delete(id) {
    let idx = this.db.indexOf(this.read(id))
    delete this.db[idx];
  }
};

module.exports = FoodModel;
