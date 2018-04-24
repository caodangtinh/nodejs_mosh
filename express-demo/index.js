const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'tinhcao' },
    { id: 2, name: 'ngoc pham' },
    { id: 3, name: 'oc con' }
];
app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

app.get('/api/courses/:id', (req, res) => {
    const id = req.params.id;
    const found = courses.find(c => c.id === parseInt(id));
    if (!found)
    res.status(404).send('The course with given id doesn\'t exist');
    res.status(200).send(found);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port + '...')
});