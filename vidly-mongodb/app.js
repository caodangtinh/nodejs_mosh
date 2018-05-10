const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('config');
const indexRoute = require('./routes/index');
const genresRoute = require('./routes/genres');

// use morgan for logging
app.use(morgan('dev'));
app.use(express.json());
// routing rule
app.use('/', indexRoute);
app.use('/api/genres', genresRoute);
// mongoose connect
const mongodbConnectionUrl = config.get('mongodb.url');
mongoose.connect(mongodbConnectionUrl)
    .then(result => console.log('Connect success'))
    .catch(error => console.log('Failed to connect to mongodb'));

// server configuration and start
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server starting at localhost:' + port);
});