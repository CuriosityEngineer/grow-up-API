var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  r: {type: Integer, required: true},
  cx: {type: Integer, required: true},
  cy: {type: Integer, required: true},
  nx: {type: Integer, required: true},
  ny: {type: Integer, required: true},
  fill: {type: String, required: true},
  stroke: {type: String, required: true},
  stroke_width: {type: Integer, required: true},
  name: {type: String, required: true},
  food_eaten: {type: Integer, required: true},
  time_alive: {type: Integer, required: true},
  delay: {type: Integer, required: true},
  ranking: {type: Integer, required: true},

  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

PlayerSchema.index({'updatedAt': -1, background: true});

var PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;
