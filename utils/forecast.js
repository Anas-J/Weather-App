const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6bc3b1d0b925138b695f46f9aa9be79d&query='+ latitude + ','+longitude+'unit=f';
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect!', undefined);
        } else if (response.body.error) {
            callback(response.body.error);
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. The temperature is ' + response.body.current.temperature + ' degrees but it feels like ' + response.body.current.feelslike+ ' degrees')
        }
    })
}

module.exports = forecast;