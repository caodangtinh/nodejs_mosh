const express = require('express');
const router = express.Router();
const Joi = require('joi');
const arr = [
    {
        id: 1,
        name: 'tinhcao'
    },
    {
        id: 2,
        name: 'ngoc pham'
    },
    {
        id: 3,
        name: 'oc con'
    },
    {
        id: 4,
        name: 'sau'
    },
    {
        id: 5,
        name: 'nhen'
    }
];

// get all courses
router.get('/', (req, res) => {
    res.send(arr);
    res.end();
});

// get course by id
router.get('/:id', (req, res) => {
    const found = findById(req.params.id);
    if (!found) return res.status(404).send('The given id ' + req.params.id + ' doesn\'t exist');
    res.status(200).send(found);
});

// create new courses
router.post('/', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const course = {
        id: arr.length + 1,
        name: req.body.name
    };
    arr.push(course);
    res.status(201).send(course);
});

// update course
router.put('/:id', (req, res) => {
    const id = req.params.id;
    // Lookup, if not exist return 404
    const found = findById(id);
    if (!found) return res.status(404).send('The given id doesn\' exist');
    // Validate, if has some error, return 400
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Update course
    found.name = req.body.name;
    res.send(found);

});

// delete course
router.delete('/:id', (req, res) => {
    //find course, if not exist return 404
    const found = findById(req.params.id);
    if (!found) return res.status(404).send('The given id doesn\' exist')
    // delete course
    const index = arr.indexOf(found);
    const remove = arr.splice(index, 1);
    res.status(200).send(remove);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
};

function findById(id) {
    const found = arr.find(c => c.id === parseInt(id));
    return found;
}
// export
module.exports = router;