var mongoose = require('mongoose');
var Players = require('../models/Players');

module.exports = {
  insertPlayer : function(req, res){
    var response = {};
    var _player = req.body;
    var db = new Players;
    for(var member in _player){
      db[member] = _player[member];
    }

    response = db.save(function(err,data){
      if (err)
      {
        response = {error: true, data: "Something really bad happened"};
        res.json(response);
      }
      else{
        response = {error: false, data: "Data saved successfully"};
        res.json(response);
      }
    });

  },
  getPlayers : function(req, res){
    var response ={};
    Players.find({},function(err,data){
      if (err){
        response = {error: true, data: "Something really bad happened"};
        res.json(response);
      }
      else{
        response = {error: false, data: data};
        res.json(response);
      }
    });
  },

  getPlayer : function(req,res){
    var response = {};
    console.log(req);
    Players.find({'_id': req.query._id}).exec(function(err,data){
      if (err){
        response = {error: true, data: "Something really bad happened"};
        res.json(response);
      }
      else{
        response = {error: false, data: data};
        res.json(response);
      }
    });
  }
}
