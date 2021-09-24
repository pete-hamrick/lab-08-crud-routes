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

    beforeEach(() => {
        return request(app).post('/api/v1/moods').send({
            mood: 'frustrated',
            mood_explanation:
                'It is thursday, it is sunny, I am in class wishing I was playing disc golf',
            zipcode: 97203,
        });
    });
    beforeEach(() => {
        return request(app).post('/api/v1/moods').send({
            mood: 'mad',
            mood_explanation:
                'It is wednesday, it is sunny, I am in lab wishing I could get unstuck',
            zipcode: 97203,
        });
    });

    afterAll(() => {
        return app.close;
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
                    id: '3',
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

    it('gets a mood by id', () => {
        return request(app)
            .get('/api/v1/moods/2')
            .then((res) => {
                expect(res.body).toEqual({
                    id: '2',
                    mood: 'mad',
                    mood_explanation:
                        'It is wednesday, it is sunny, I am in lab wishing I could get unstuck',
                    current_temperature: expect.any(Number),
                    air_quality: expect.any(Number),
                    weather_description: expect.any(String),
                    weather_observed_time: expect.any(String),
                });
            });
    });

    it('gets all of the moods', () => {
        return request(app)
            .get('/api/v1/moods')
            .then((res) => {
                expect(res.body).toEqual([
                    {
                        id: '1',
                        mood: 'frustrated',
                        mood_explanation:
                            'It is thursday, it is sunny, I am in class wishing I was playing disc golf',
                        current_temperature: expect.any(Number),
                        air_quality: expect.any(Number),
                        weather_description: expect.any(String),
                        weather_observed_time: expect.any(String),
                    },
                    {
                        id: '2',
                        mood: 'mad',
                        mood_explanation:
                            'It is wednesday, it is sunny, I am in lab wishing I could get unstuck',
                        current_temperature: expect.any(Number),
                        air_quality: expect.any(Number),
                        weather_description: expect.any(String),
                        weather_observed_time: expect.any(String),
                    },
                ]);
            });
    });

    it('should PATCH a mood by id', () => {
        return request(app)
            .patch('/api/v1/orders/2')
            .send({ mood: 'upset' })
            .then((res) => {
                expect(res.body).toEqual({
                    id: '2',
                    mood: 'upset',
                    mood_explanation:
                        'It is wednesday, it is sunny, I am in lab wishing I could get unstuck',
                    current_temperature: expect.any(Number),
                    air_quality: expect.any(Number),
                    weather_description: expect.any(String),
                    weather_observed_time: expect.any(String),
                });
            });
    });
});
