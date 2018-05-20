const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.status(200).send('Welcome to login chapter');
});

module.exports = route;