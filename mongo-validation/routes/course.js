const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const Course = require('../models/Course');

/**
 * Get all Course
 */

route.get('/', async (req, res, next) => {
    const result = await Course.find();
    res.send(result);
});
/**
 * Get Course by Id
 */

route.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const result = await Course.findById(id);
    res.send(result);
});

/**
 * Add new Course
 */

route.post('/', async (req, res, next) => {
    const body = req.body;
    const course = new Course({
        name: body.name,
        author: body.author,
        tags: body.tags,
        isPublished: body.isPublished,
        price: body.price,
        category: body.category
    });
    try {
        const result = await course.save();
        res.send(result);
    } catch (error) {
        // console.log(error.message);
        res.send(error.message);
    }
});

/**
* Update Course
*/

/**
 * Delete new Course
 */


// exports
module.exports = route;