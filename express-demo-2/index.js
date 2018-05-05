// express module
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

//
const logger = require('./middleware/logger');
const courses = require('./route/courses');
const homepage = require('./route/homepage');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(helmet()) ;
app.use('/api/courses', courses);
app.use('/', homepage);
app.use((req, res, next) => {
    logger.log(req, res, next, 'Logging ...');
});

app.use((req, res, next) => {
    logger.log(req, res, next, 'Authenticating ...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server starting at ' + PORT);
});
