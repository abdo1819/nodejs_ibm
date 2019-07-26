http = require('http')

exports.current = function (location, resultCallback) {
    var options = {
        host: 'w1.weather.gov',
        path: '/xml/current_obs/' + location + '.xml'
    };
    http.request(options, function (response) {
        var buffer = '';
        response.on('data', function (chunk) {
            buffer += chunk;
        }
        );
        response.on('end', function () {
            resultCallback(buffer);
        });
    }).end();
}
