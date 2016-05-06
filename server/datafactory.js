
var router = require("./router");
var server = require("./dataserver");

var args = process.argv.splice(2);
var datasrc;
switch(args[0]){
  case "shop":{
    datasrc= require("./shop");
  }break;
  case "car":{
    datasrc= require("./car");
  }
  break;
}
console.log(datasrc);
server.start(router.route,datasrc.handle);
