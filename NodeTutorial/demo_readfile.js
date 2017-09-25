var http = require('http');
var fs = require('fs');

var RES_HEAD = {'Cache-Control':'no-cache, no-store, max-age=0, must-revalidate' , 'Content-Security-Policy':'default-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *' , 'Content-Type':'text/html;charset=UTF-8' , 'Expires':'0' , 'Pragma':'no-cache' , 'Server':'nodejs' , 'Strict-Transport-Security':'max-age=31536000' , 'X-Content-Type-Options':'nosniff' , 'X-Frame-Options':'SAMEORIGIN' , 'X-XSS-Protection':'1; mode=block'};

http.createServer(function(req, res) {
	fs.readFile('demofile1.html', function(err, data) {
		res.writeHead(200, RES_HEAD);
		res.write(data);
		res.end();
	});

	// Create Files
	fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
		if (err)
			throw err;
		console.log('mynewfile1 Saved!');
	});

	/*fs.writeFile('mynewfile2.txt', 'Hello content!', function(err) {
		if (err)
			throw err;
		console.log('mynewfile2 Saved!');
	});*/

	// Update Files
	/*fs.appendFile('mynewfile1.txt', ' This is my text.', function(err) {
		if (err)
			throw err;
		console.log('Updated!');
	});

	fs.writeFile('mynewfile2.txt', 'This is my text', function(err) {
		if (err)
			throw err;
		console.log('Replaced!');
	});*/
	
	// Delete Files
	/*fs.unlink('mynewfile1.txt', function(err) {
		if (err)
			throw err;
		console.log('File deleted!');
	});*/
	
	// Rename Files
	fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
		if (err)
			throw err;
		console.log('File Renamed!');
	});
	
}).listen(8080);