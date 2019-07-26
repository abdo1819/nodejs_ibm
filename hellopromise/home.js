var http = require("http");
var port = 8080;
function readWeather(options) {
    return new Promise(function (resolve, reject) {
        var weatherRequest = http.request(options, function (weatherResponse) {
            var buffer = '';
            var result = '';
            weatherResponse.on('data', function (chunk) {
                buffer += chunk;
            });
            weatherResponse.on('end', function () {
                resolve('Hello! ' + buffer);

            });
        });
        weatherRequest.on('error', function (e) {
            reject(e.message);
        });
        weatherRequest.end();
    })
}
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    var cityName = 'Cairo';
    var options = {
        path: '/?city=' + cityName,
        port: '8081'
    };
    readWeather(options).then(val => response.end(val), console.log);
}).listen(port);