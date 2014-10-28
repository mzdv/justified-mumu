var http = require('http');

// console.log(http.STATUS_CODES);

var server = http.createServer(function (request, response) {

	// console.log(request.method);

	// if (request.method === "POST") {
	// 	console.log("POST");
	// }
	// else if(request.method === "GET") {
	// 	console.log("GET");
	// }
	// else if(request.method === "DELETE") {
	// 	console.log("DELETE");
	// }
	// else if(request.method === "PUT") {
	// 	console.log("PUT");
	// }
	// else if(request.method === "PATCH") {
	// 	console.log("PATCH");
	// };
	// console.log(request);
	// console.log(response);
	// console.log(typeof(request.toString()));
	// console.log(request);
	response.write(JSON.stringify(request.headers));
	response.write(JSON.stringify(request.url));
	response.end(JSON.stringify(request.method));

})
	.on('error', function(error) {
		console.log("I'm cleaning out today. " + error)
	});

server.listen("1337", "127.0.0.1");
