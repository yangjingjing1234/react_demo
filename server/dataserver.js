
var http = require("http");
var url = require("url");
function start(route,handle){
	function onReq(req,res){
		var pathname = url.parse(req.url).pathname;
		//route(handle,pathname);

		res.writeHead(200,{"Content-Type":"text/json;charset:utf-8","Access-Control-Allow-Origin":"*"});
		var content = JSON.stringify(route(handle,pathname));
		res.write(content);
		res.end();

	}
	http.createServer(onReq).listen(8123);
	console.log("Start Data Server....");
}

exports.start = start;
