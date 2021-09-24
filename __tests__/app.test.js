import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
// const setup = require('../data/setup.js');
// const request = require('supertest');
// const app = require('../lib/app.js');

describe('mood + weather tracking routes', () => {
    beforeEach(() => {
        return setup(pool);
    });

    afterAll(() => {
        pool.end();
    });

    it('returns the current weather given a zipcode', () => {
        return request(app)
            .get('/api/v1/moods/weather/97203')
            .then((res) => {
                expect(res.body).toEqual({
                    current_temperature: expect.any(Number),
                    air_quality: expect.any(Number),
                    weather_description: expect.any(String),
                    weather_observed_time: expect.any(String),
                });
            });
    });
    it('POSTS mood and current weather to the db', () => {
        return request(app)
            .post('/api/v1/moods')
            .send({
                mood: 'happy',
                mood_explanation:
                    'It is friday, it is sunny, my project is going well',
                zipcode: 97203,
            })
            .then((res) => {
                expect(res.body).toEqual({
                    id: '1',
                    mood: 'happy',
                    mood_explanation:
                        'It is friday, it is sunny, my project is going well',
                    current_temperature: expect.any(Number),
                    air_quality: expect.any(Number),
                    weather_description: expect.any(String),
                    weather_observed_time: expect.any(String),
                });
            });
    });
});
