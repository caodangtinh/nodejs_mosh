const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');

route.get('/', (req, res, next) => {
    // connect to mongodb
    mongoose.connect('mongodb://localhost:27017/validator')
        .then(result => console.log('Successful connect to mongodb'))
        .catch(error => console.log('Error while connect to mongodb ' + error.message));
    // create schema
    const schema = mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: { type: Date, default: Date.now() },
        isPublished: Boolean,
        price: Number
    });
    // create model
    const Course = mongoose.model('Course', schema);
    // create data
    const nodejs = new Course({
        name: 'Node.js',
        author: 'mosh',
        tags: ['Node.js', 'JS'],
        isPublished: true,
        price: 15
    });
    async function saveData() {
        await nodejs.save();
    };
    // saveData();
    // query data
    async function getAllCourse() {
        const result = await Course.find({ isPublished: true })
            .select({ name: 1 });
        res.send(result);
    }
    getAllCourse();
});

// exports
module.exports = route;