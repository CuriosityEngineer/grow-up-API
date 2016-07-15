var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  r: {type: Number, required: true},
  cx: {type: Number, required: true},
  cy: {type: Number, required: true},
  fill: {type: String, required: true},

  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

FoodSchema.index({'updatedAt': -1, background: true});

var FoodModel = mongoose.model('Food', FoodSchema);

module.exports = FoodModel;
