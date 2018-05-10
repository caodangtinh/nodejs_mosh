const express = require('express');
const route = express.Router();
const Genre = require('../model/Genres')



/**
 * Get all
 */
route.get('/', async (req, res, next) => {
    try {
        const result = await Genre.find()
            .select({ _id: 1, name: 1 })
            .sort({ name: 1 });
        res.status(200).send(result);
    } catch (ex) {
        res.status(500).send(ex.message);
    }
});

/**
 * Get by Id
 */
route.get('/:id', async (req, res, next) => {
    try {
        const reqId = req.params.id;
        const result = await Genre.find({ _id: { $eq: reqId } });
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/**
 * Create new
 */

route.post('/', async (req, res, next) => {
    try {
        const genre = new Genre({
            name: req.body.name
        })
        const result = await genre.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/**
 * Find by id and remove
 */

route.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Genre.deleteMany({ name: { $eq: 'Avengers: Winter Soldier' } });
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = route;