var http = require('http');
var dt = require('./myfirstmodule');

var RES_HEAD = {'Cache-Control':'no-cache, no-store, max-age=0, must-revalidate' , 'Content-Security-Policy':'default-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *' , 'Content-Type':'text/html;charset=UTF-8' , 'Expires':'0' , 'Pragma':'no-cache' , 'Server':'nodejs' , 'Strict-Transport-Security':'max-age=31536000' , 'X-Content-Type-Options':'nosniff' , 'X-Frame-Options':'SAMEORIGIN' , 'X-XSS-Protection':'1; mode=block'};

http.createServer(function (req, res) {
	// res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8', 'Server': 'nodejs'});
	res.writeHead(200, RES_HEAD);    
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);