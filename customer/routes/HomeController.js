const mongoose = require('mongoose');
const express = require('express');
const route = express.Router();

/**
 * Home page
 */
route.get('/', (req, res, next) => {
    res.status(200).send('Welcome to customer service');
})
// export
module.exports = route;