const logger = require('morgan');
const express = require('express');
const indexRoute = require('./routes/index');
const app = express();

app.use('/', indexRoute);
app.use(express.json());
app.use(logger('combined'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server start at : localhost:' + port);
});