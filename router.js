var express = require("express");
var router = express.Router();

module.exports = function(app){
  app.route('/data')
    //testing get api call
    .get(function(req,res){
      var response = {
        "Test": "It is working",
        "Description": 2
      };
      res.send(response);
    })

    //Testing post api call
    .post(function(req,res){
      console.log(req.body);
      var response = req.body;
      res.send(response);
    });
}
