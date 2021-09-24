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
    })
    .get('/', async (req, res, next) => {
        try {
            const getMoods = await MoodService.getMoods();
            res.send(getMoods);
        } catch (error) {
            next(error);
        }
    })
    .patch('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const mood = req.body.mood;
            const mood_explanation = req.body.mood_explanation;
            const updateMood = await MoodService.patchMood(
                id,
                mood,
                mood_explanation
            );
            res.send(updateMood);
        } catch (error) {
            next(error);
        }
    })
    .delete('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const deletedMood = await MoodService.deleteMood(id);
            res.send(deletedMood);
        } catch (error) {
            next(error);
        }
    });
// .get()
// .patch()
// .delete()
