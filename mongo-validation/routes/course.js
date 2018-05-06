const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const Course = require('../models/Course');

/**
 * Get all Course
 */

route.get('/', (req, res, next) => {
    async function getAllCourse() {
        const result = await Course.find();
        res.send(result);
    };
    getAllCourse();
});
/**
 * Get Course by Id
 */

route.get('/:id', (req, res, next) => {
    async function getById() {
        const id = req.params.id;
        const result = await Course.findById(id);
        res.send(result);
    };
    getById();
});

/**
 * Add new Course
 */

route.post('/', (req, res, next) => {
    async function saveCourse() {
        const body = req.body;
        const course = new Course({
            name: body.name,
            author: body.author,
            tags: body.tags,
            isPublished: body.isPublished,
            price: body.price
        });
        const result = await course.save();
        res.send(result);
    };
    saveCourse();
});

/**
* Update Course
*/

/**
 * Delete new Course
 */


// exports
module.exports = route;