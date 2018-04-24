// constant
const PORT = process.env.PORT || 3000;
// third party module
const express = require('express');
const morgan = require('morgan');
const app = express();
const config = require('config');
// middleware function
app.use(express.static('public'));
// Configuration
console.log('Application Name : ' + config.get('name'));
console.log('Mail server : ' + config.get('mail.host'));

// templating engine
app.set('view engine', 'pug');
app.set('views', './views')

if (app.get('env') != 'production') {
    app.use(morgan('tiny'));
    console.log('Morgan enable');
} else {
    console.log(app.get('env'));
}
// code
app.get('/', (req, res) => {
    res.render('index.pug', {
        title:'My Express App',
        message: 'Hello'
    });
    // return res.status(200).send('welcome to environemtn section');
});

console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
console.log(`app : ${app.get('env')}`);

app.listen(PORT, () => {
    console.log(`Server starting at ${PORT}`);
})