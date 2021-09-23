const Mood = require('../models/Mood');
const { fetchWeather } = require('../utils/weather');

module.exports = class MoodService {
    static async getWeather(zipcode) {
        const weather = await fetchWeather(zipcode);

        return weather;
    }
};
