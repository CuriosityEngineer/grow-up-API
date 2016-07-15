var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  r: {type: Integer, required: true},
  cx: {type: Integer, required: true},
  cy: {type: Integer, required: true},
  fill: {type: String, required: true},
  
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

FoodSchema.index({'updatedAt': -1, background: true});

var FoodModel = mongoose.model('Food', FoodSchema);

module.exports = FoodModel;
