import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('mood + weather tracking routes', () => {
    beforeEach(() => {
        return setup(pool);
    });

    afterAll(() => {
        pool.end();
    });

    // it('returns the current weather given a zipcode', () => {
    //     const zipcode = 97203;

    //     const weatherData = getWeather(zipcode);

    //     expect(weatherData).toEqual({
    //         'current-temperature': expect.any(Number),
    //         'air-quality': expect.any(Number),
    //         'weather-description': expect.any(String),
    //         'observed-time': expect.any(String),
    //     });
    // });
});
