// const Mood = require('../models/Mood');
import Mood from '../models/Mood.js';
import { fetchWeather } from '../utils/weather.js';

export default class MoodService {
    static async getWeather(zipcode) {
        const weather = await fetchWeather(zipcode);

        return weather[0];
    }
    static async addMood({ mood, mood_explanation, zipcode }) {
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

    static async getMood(id) {
        const mood = await Mood.getMood(id);

        return mood;
    }

    static async getMoods() {
        const mood = await Mood.getAllMoods();

        return mood;
    }

    static async patchMood(id, mood, mood_explanation) {
        const updatedMood = await Mood.updateMood(id, mood, mood_explanation);

        return updatedMood;
    }

    // static async deleteMood(id) {
    //     const deletedMood = await
    // }
}
