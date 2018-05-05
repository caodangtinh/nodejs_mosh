const express = require('express');
const route = express.Router();

/**
 * Get home
 */
route.get('/', (req, res, next) => {
    res.send('Welcome');
});

// exports
module.exports = route;