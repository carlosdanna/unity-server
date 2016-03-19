var express = require("express");
var router = express.Router();

module.exports = function(app){
  app.route('/data')
    .get(function(req,res){
      res.send({"test": "It is working fine"});
    });
}
