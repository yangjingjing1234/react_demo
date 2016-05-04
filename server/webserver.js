
var http = require("http");
var express = require("express");
var app = express();
app.use(express.static("../react"));
var server = app.listen(8000,function(){
  console.log("Start web server....");
});
