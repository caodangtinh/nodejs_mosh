const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.send('Welcome to Morgan demo');
});

module.exports = route;