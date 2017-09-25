var http = require('http');
var url = require('url');
var fs = require('fs');

var RES_HEAD = {'Cache-Control':'no-cache, no-store, max-age=0, must-revalidate' , 'Content-Security-Policy':'default-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *' , 'Content-Type':'text/html;charset=UTF-8' , 'Expires':'0' , 'Pragma':'no-cache' , 'Server':'nodejs' , 'Strict-Transport-Security':'max-age=31536000' , 'X-Content-Type-Options':'nosniff' , 'X-Frame-Options':'SAMEORIGIN' , 'X-XSS-Protection':'1; mode=block'};

http.createServer(function(req, res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, RES_HEAD);
			return res.end("404 Not Found");
		}
		res.writeHead(200, RES_HEAD);
		res.write(data);
		return res.end();
	});
}).listen(8080);