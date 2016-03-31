var mongoose = require('mongoose');
var Players = require('../models/Players');

module.exports = {
  insertPlayer : function(_player){
    var db = new Players;
    for(var member in _player){
      db[member] = _player[member];
    }
    console.log(db);
  }

};
