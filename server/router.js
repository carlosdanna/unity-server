var express = require("express");
var router = express.Router();
var playerCalls = require('./PlayersCalls');
module.exports = function(app){
  app.route('/data')
    //testing get api call
    .get(function(req,res){
      var response = {
        "Test": "It is working",
        "Description": 2
      };
      var data = {
        Username: 'carlosdanna',
        LastTimeConnected: Date.now()
      }
      playerCalls.insertPlayer(data);

      res.send(response);
    })

    //Testing post api call
    .post(function(req,res){
      console.log(req.body);
      var response = {"success": "Congratulations you made it"};
      res.send(response);
    });
}
