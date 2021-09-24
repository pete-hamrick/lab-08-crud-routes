// const Mood = require('../models/Mood');
import Mood from '../models/Mood.js';
import { fetchWeather } from '../utils/weather.js';

export default class MoodService {
    static async getWeather(zipcode) {
        const weather = await fetchWeather(zipcode);

        return weather[0];
    }
}
