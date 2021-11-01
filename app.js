const geocode = require("./utils/geocode");
const forcast = require("./utils/forcast");

geocode('Bangalore', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

forcast(-77.7088, 44.1545, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});