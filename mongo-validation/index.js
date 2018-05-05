const express = require('express');
const logger = require('morgan');
const path = require('path');
const indexRoute = require('./routes/index');
const courseRoute = require('./routes/course');
const app = express();

// middleware
app.use(logger('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);
app.use('/course', courseRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server start at localhost:' + port);
});