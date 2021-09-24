import pool from '../utils/pool.js';

export default class Mood {
    id;
    mood;
    mood_explanation;
    temperature;
    air_quality;
    description;
    weather_observed_time;

    constructor(row) {
        this.id = row.id;
        this.mood = row.mood;
        this.mood_explanation = row.mood_explanation;
        this.temperature = row.temperature;
        this.air_quality = row.air_quality;
        this.description = row.description;
        this.weather_observed_time = row.weather_observed_time;
    }

    static async newMood({
        mood,
        mood_explanation,
        temperature,
        air_quality,
        description,
        weather_observed_time,
    }) {
        const { rows } = await pool.query(
            `INSERT INTO moods (
                mood,
                mood_explanation,
                temperature,
                air_quality,
                description,
                weather_observed_time
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;`,
            [
                mood,
                mood_explanation,
                temperature,
                air_quality,
                description,
                weather_observed_time,
            ]
        );
        return new Mood(rows[0]);
    }
}
