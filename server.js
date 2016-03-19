var express = require("express");
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var logger = require("morgan");
var bodyParser = require("body-parser");

var port = 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(logger('dev'))
require('./router')(app);


app.listen(port, function(){
  console.log("server running on port: " + port);
});
