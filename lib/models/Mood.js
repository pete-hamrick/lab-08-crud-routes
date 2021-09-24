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

    static async getAllMoods() {
        const { rows } = await pool.query('SELECT * FROM moods;');

        return rows.map((row) => {
            return new Mood(row);
        });
    }

    static async updateMood(id, mood, mood_explanation) {
        const { rows } = await pool.query(
            `
            UPDATE moods 
            SET 
                mood=$1, 
                mood_explanation=$2
            WHERE moods.id=$3
            RETURNING *;
            `,
            [id, mood, mood_explanation]
        );
        return new Mood(rows[0]);
    }
}
