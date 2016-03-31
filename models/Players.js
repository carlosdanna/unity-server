var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var players = new Schema({
  Username:           {type: String, required: true},
  LastTimeConnected:  {type: Date, default: Date.now},
  Active:             {type:Boolean, default: true}
});


var Players = mongoose.model('Players',players);
module.exports = Players;
