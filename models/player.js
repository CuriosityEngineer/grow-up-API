var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: {type: String, required: true},
  r: {type: Number},
  cx: {type: Number},
  cy: {type: Number},
  nx: {type: Number},
  ny: {type: Number},
  fill: {type: String},
  stroke: {type: String},
  stroke_width: {type: Number},
  food_eaten: {type: Number},
  time_alive: {type: String},
  delay: {type: Number},
  ranking: {type: Number},
  status: {type: String},

  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

PlayerSchema.index({'updatedAt': -1, background: true});

var PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;
