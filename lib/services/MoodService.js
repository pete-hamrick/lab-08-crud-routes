// const Mood = require('../models/Mood');
import Mood from '../models/Mood.js';
import { fetchWeather } from '../utils/weather.js';

export default class MoodService {
    static async getWeather(zipcode) {
        const weather = await fetchWeather(zipcode);

        return weather[0];
    }
    //get weather, create mood and weather object, store the mood entry
    static async addMood({ mood, mood_explanation, zipcode }) {
        //get weather
        // const weather = await this.getWeather(zipcode);
        const {
            current_temperature,
            air_quality,
            weather_description,
            weather_observed_time,
        } = await this.getWeather(zipcode);
        const newMood = await Mood.newMood({
            mood,
            mood_explanation,
            current_temperature,
            air_quality,
            weather_description,
            weather_observed_time,
        });

        return newMood;
    }
}
