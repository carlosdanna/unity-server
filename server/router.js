var express = require("express");
var router = express.Router();
var playerCalls = require('./PlayersCalls');


module.exports = function(app){
  app.route('/data')
    //testing get api call
    .get(function(req,res){
      playerCalls.getPlayer(req,res);
    })

    //Testing post api call
    .post(function(req,res){
      playerCalls.insertPlayer(req,res);
    });
}
