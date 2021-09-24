import { Router } from 'express';
import MoodService from '../services/MoodService.js';

export default Router().get('/weather/:zipcode', async (req, res, next) => {
    try {
        const zipcode = req.params.zipcode;
        const weather = await MoodService.getWeather(zipcode);
        res.send(weather);
    } catch (error) {
        next(error);
    }
});
// .get()
// .post()
// .patch()
// .delete()
