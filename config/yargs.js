const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// https://developers.google.com/maps/documentation/geocoding/start
// AIzaSyC15CVT-mZIgCEjhLi9jJ27aq9xV4IrAEA

module.exports = {
    argv
}