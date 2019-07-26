var http = require("http");
var port = 8080;
function readWeather(options, response) {
    var weatherRequest = http.request(options, function (weatherResponse) {
        var buffer = '';
        var result = '';
        weatherResponse.on('data', function (chunk) {
            buffer += chunk;
        });
        weatherResponse.on('end', function () {
            response.end('Hello! ' + buffer);
        });
    });
    weatherRequest.on('error', function (e) {
        console.log(e.message);
    });
    weatherRequest.end();
}
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    var cityName = 'Cairo';
    var options = {
        hotst: 'localhost',
        path: '/?city=' + cityName,
        port: '8081'
    };
    readWeather(options, response);
}).listen(port);