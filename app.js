var http = require('http');

var server = http.createServer(function (request, response) {

	// console.log(request.headers.host);

	response.write("Host: " + request.headers.host + '\n');
	response.write("User-agent: " + request.headers['user-agent'] + '\n');	//dirty
	response.write("HTTP method: " + request.method + '\n');
	response.end("Request: " + request.url + '\n');

})

.on('error', function(error) {
	console.log("Error log: " + error + '\n')
})

.listen("1337", "127.0.0.1");


