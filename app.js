var http = require('http');

var server = http.createServer(function (request, response) {

	// console.log(request.headers.host);

	response.write(request.headers.host);
	response.write(request.headers['user-agent']);	//dirty
	response.write(request.url);
	response.end(request.method);

})

.on('error', function(error) {
	console.log("Error log: " + error)
})

.listen("1337", "127.0.0.1");


