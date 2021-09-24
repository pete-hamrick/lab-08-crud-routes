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
            const newMood = await MoodService.addMood(req.body);
            res.send(newMood);
        } catch (error) {
            next(error);
        }
    })
    .get('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const getMood = await MoodService.getMood(id);
            res.send(getMood);
        } catch (error) {
            next(error);
        }
    });
// .get()
// .patch()
// .delete()
