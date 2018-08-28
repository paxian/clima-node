const axios = require('axios');

// e92ae86b43c005bbbe79d30f1eb68f78
// https://api.openweathermap.org/data/2.5/weather?lat=9.9280694&lon=-84.0907246&appid=e92ae86b43c005bbbe79d30f1eb68f78

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e92ae86b43c005bbbe79d30f1eb68f78`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}