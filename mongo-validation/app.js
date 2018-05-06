const express = require('express');
const logger = require('morgan');
const path = require('path');
const indexRoute = require('./routes/index');
const courseRoute = require('./routes/course');
const app = express();
const mongoose = require('mongoose');

// middleware
app.use(logger('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);
app.use('/course', courseRoute);
// connect to mongodb
mongoose.connect('mongodb://localhost:27017/validator')
    .then(result => console.log('Successful connect to mongodb'))
    .catch(error => console.log('Error while connect to mongodb ' + error.message));

// server configuration
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server start at localhost:' + port);
});