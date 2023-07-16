'use strict';

class Collection {
  constructor(model){
    this.model = model;
  }
  async create(obj){
    await this.model.create(obj)
  }
  async read(obj = null){
    if(obj === null){
      await this.model.findAll()
    } else {
      await this.model.findOne(obj)
    }
  }
  async update(id, obj){
    await this.model.update(obj, {where: id})
  }
  async delete(id){
    await this.model.delete(id)
  }
}

module.exports = Collection;