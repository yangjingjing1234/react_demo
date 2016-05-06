
var reqHandlers = require("./reqShopHandlers");

var handle = {};
handle["/"] = reqHandlers.home;
handle["/home"] = reqHandlers.home;
handle["/book"] = reqHandlers.book;
handle["/pc"] = reqHandlers.pc;
handle["/car"] = reqHandlers.car;
handle["/about"] = reqHandlers.about;
handle["/join"] = reqHandlers.join;

exports.handle = handle;
