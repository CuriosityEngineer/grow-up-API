// models/game.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  playerOne: {type: String, required: true},
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

GameSchema.index({'updatedAt': -1, background: true});

var GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;
