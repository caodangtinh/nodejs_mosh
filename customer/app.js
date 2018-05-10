const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const config = require('config');
const homeRouter = require('./routes/HomeController');
const customerRouter = require('./routes/CustomerController');

// middleware
app.use(logger('dev'));
app.use(express.json());

// router
app.use('/', homeRouter);
app.use('/api/customer', customerRouter);
// mongodb connect
mongoose.connect(config.get('db.url'))
    .then(result => console.log('Success connect to mongodb at : ' + config.get('db.url')))
    .catch(error => console.log('Cannot  connect to mongodb at : ' + config.get('db.url')));

// server information
const port = config.get('server.port') || process.env.PORT;
app.listen(port, () => {
    console.log('Server starting at localhost:' + port);
})