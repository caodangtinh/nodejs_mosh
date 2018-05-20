const expres = require('express');
const app = expres();
const logger = require('morgan');
const mongoose = require('mongoose');
const homeRoute = require('./routes/HomeController');
const userRoute = require('./routes/UserController');
const authRoute = require('./routes/AuthenticationController');
const config = require('config');


// middleware
app.use(expres.json());
app.use(logger('dev'));
app.use('/', homeRoute);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);


// mongoose connect
mongoose.connect(config.get('db.url'))
    .then(result => console.log('Connected Success to mongodb'))
    .catch(error => console.log('error while trying to connect with mongodb ' + error.message));

// server
const port = config.get('server.port') || 3000;
app.listen(port, () => {
    console.log('Server starting at localhost:' + port);
});