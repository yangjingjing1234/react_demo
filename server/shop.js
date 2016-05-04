
var server = require("./dataserver");
var router = require("./router");
var reqHandlers = require("./reqHandlers");

var handle = {};
handle["/"] = reqHandlers.home;
handle["/home"] = reqHandlers.home;
handle["/book"] = reqHandlers.book;
handle["/pc"] = reqHandlers.pc;
handle["/car"] = reqHandlers.car;
handle["/about"] = reqHandlers.about;
handle["/join"] = reqHandlers.join;

server.start(router.route,handle);
