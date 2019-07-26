var http = require("http");
var fetch = require("node-fetch");
var port = 8080;
http.createServer(function (request, response) {
	fetch('http://localhost:8081/?city=Cairo', {method: 'get'})
	.then (function(res) {return res.text()})
	.then(function (data) {response.end('Hello! ' + data)})
	.catch(function(e) {console.log(e.message)});		
}).listen(port);