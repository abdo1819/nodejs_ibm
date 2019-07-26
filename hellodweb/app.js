var http = require('http')
var dateModule = require('./currentDate')
var port = 8080

http.createServer(function (request, response) {
    // Set the content type of the response
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // Write a simple Hello NodeJS message,
    // which will be shown in the user's web browser
    response.end('Hello NodeJS! The time now is: ' + dateModule.currentDateTime());


}).listen(port)