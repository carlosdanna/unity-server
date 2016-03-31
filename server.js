var express     = require("express");
var app         = express();
var mongoose    = require("mongoose");
var logger      = require("morgan");
var bodyParser  = require("body-parser");
var mongoDB     = require('./conf/mongo');


var port        = process.env.port || 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

mongoDB.connect();

app.use(logger('dev'))
require('./server/router')(app);

app.listen(port, function(){
  console.log("server running on port: " + port);
});
