const { Item } = require('./item');
// FILL THIS OUT

class Food extends Item {
constructor(name, description) {
    super(name, description)
    this.isFood = true
  }
}

module.exports = {
  Food,
};
