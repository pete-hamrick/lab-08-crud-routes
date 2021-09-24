import pool from '../utils/pool.js';

export default class Mood {
    id;
    mood;
    mood_explanation;
    current_temperature;
    air_quality;
    weather_description;
    weather_observed_time;

    constructor(row) {
        this.id = row.id;
        this.mood = row.mood;
        this.mood_explanation = row.mood_explanation;
        this.current_temperature = row.current_temperature;
        this.air_quality = row.air_quality;
        this.weather_description = row.weather_description;
        this.weather_observed_time = row.weather_observed_time;
    }

    static async newMood({
        mood,
        mood_explanation,
        current_temperature,
        air_quality,
        weather_description,
        weather_observed_time,
    }) {
        const { rows } = await pool.query(
            `INSERT INTO moods (
                mood,
                mood_explanation,
                current_temperature,
                air_quality,
                weather_description,
                weather_observed_time
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;`,
            [
                mood,
                mood_explanation,
                current_temperature,
                air_quality,
                weather_description,
                weather_observed_time,
            ]
        );
        return new Mood(rows[0]);
    }
    static async getMood(id) {
        const { rows } = await pool.query(
            'SELECT * FROM moods WHERE moods.id = $1;',
            [id]
        );
        return new Mood(rows[0]);
    }
}
