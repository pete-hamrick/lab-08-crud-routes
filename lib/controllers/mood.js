const { Router } = require('express');
const MoodService = require('../services/MoodService.js');

module.exports = Router().get('/weather', async (req, res, next) => {
    try {
        const zipcode = req.body.zipcode;
        const weather = await MoodService.getWeather(zipcode);
        res.send(weather);
    } catch (error) {
        next(error);
    }
});
