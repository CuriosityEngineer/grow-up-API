var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  r: {type: Number, required: true},
  cx: {type: Number, required: true},
  cy: {type: Number, required: true},
  nx: {type: Number, required: true},
  ny: {type: Number, required: true},
  fill: {type: String, required: true},
  stroke: {type: String, required: true},
  stroke_width: {type: Number, required: true},
  name: {type: String, required: true},
  food_eaten: {type: Number, required: true},
  time_alive: {type: Number, required: true},
  delay: {type: Number, required: true},
  ranking: {type: Number, required: true},

  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

PlayerSchema.index({'updatedAt': -1, background: true});

var PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;
