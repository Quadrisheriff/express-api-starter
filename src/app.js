const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('lightrun').start({
    lightrunSecret: 'c4bd9b5c-171c-4592-a1bd-8d5063296841',
    company: 'sheriff',
});

require('dotenv').config();

const middlewares = require('./middlewares');
const request = require('./api/request');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api', request);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
