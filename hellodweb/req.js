var weather = require('./weather');
var location = 'KSFO';
weather.current(location, function(temp_f) {
console.log(temp_f);
});
