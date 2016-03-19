var express = require("express");
var router = express.Router();

module.exports = function(app){
  app.route('/data')
    .get(function(req,res){
      var response = {
        Test: "It is working",
        Description: 2
      };
      res.send(response);
    });
}
