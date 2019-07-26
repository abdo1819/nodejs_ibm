var http = require("http");
var port = 8081
// Create the server and listen to requests on the specified port.
http.createServer(function (request, response) {
    var url = require('url');

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    var cityName = query.city;

    // Set the content type of the response
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // Write the weather of the received city name in the request parameters
    if (!cityName || cityName === 'undefined') {
        response.end('City name is not provided');
    }
    if (cityName === 'Cairo') {
        response.end('Weather is Sunny in ' + query.city + ' city');
    }
    else {
        response.end('Weather is unknown for ' + query.city + ' city');
    }

}).listen(port);
