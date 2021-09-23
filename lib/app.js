// import express from 'express';
const express = require('express');
// import notFoundMiddleware from './middleware/not-found.js';
// import errorMiddleware from './middleware/error.js';

const app = express();

app.use(express.json());

app.use('/api/v1/moods', require('./controllers/mood.js'));

app.use(require(notFoundMiddleware));
app.use(require(errorMiddleware));

module.exports = app;
