import { Router } from 'express';
import MoodService from '../services/MoodService.js';

export default Router()
    .get('/weather/:zipcode', async (req, res, next) => {
        try {
            const zipcode = req.params.zipcode;
            const weather = await MoodService.getWeather(zipcode);
            res.send(weather);
        } catch (error) {
            next(error);
        }
    })
    .post('/', async (req, res, next) => {
        try {
            // const zipcode = req.body.zipcode;
            const newMood = await MoodService.addMood(req.body);
            res.send(newMood);
        } catch (error) {
            next(error);
        }
    });
// .post()
// .get()
// .patch()
// .delete()
