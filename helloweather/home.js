var http = require('http')

var port = 8080

http.createServer(function (request, response) {
    // Set the content type of the response
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    var cityName = 'Cairo';
    var options = {
        host: 'localhost',
        path: '/?city=' + cityName,
        port: '8081'
    };
    var weatherRequest = http.request(options, function (weatherResponse) {
        var buffer = '';
        var result = '';
        weatherResponse.on('data', function (chunk) {
            buffer += chunk;
        });
        weatherResponse.on('end', function () {
            console.log(buffer);
            // Write a simple Hello World message appended with the weather data
            response.end('Hello! ' + buffer);
        });
    });
    weatherRequest.on('error', function (e) {
        console.log(e.message);
    });


    weatherRequest.end();
}).listen(port)