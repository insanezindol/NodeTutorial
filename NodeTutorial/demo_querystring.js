var http = require('http');
var url = require('url');

var RES_HEAD = {'Cache-Control':'no-cache, no-store, max-age=0, must-revalidate' , 'Content-Security-Policy':'default-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *' , 'Content-Type':'text/html;charset=UTF-8' , 'Expires':'0' , 'Pragma':'no-cache' , 'Server':'nodejs' , 'Strict-Transport-Security':'max-age=31536000' , 'X-Content-Type-Options':'nosniff' , 'X-Frame-Options':'SAMEORIGIN' , 'X-XSS-Protection':'1; mode=block'};

http.createServer(function (req, res) {
	  res.writeHead(200, RES_HEAD);
	  var q = url.parse(req.url, true).query;
	  var txt = q.year + " " + q.month;
	  res.end(txt);
	}).listen(8080);