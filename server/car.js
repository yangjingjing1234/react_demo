
var reqHandlers = require("./reqCarHandlers");

var handle = {};
handle["/"] = reqHandlers.home;
handle["/home"] = reqHandlers.home;
handle["/about"] = reqHandlers.about;
handle["/join"] = reqHandlers.join;

exports.handle = handle;
