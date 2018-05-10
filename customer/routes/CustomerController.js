const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const Customer = require('../model/Customer');
const route = express.Router();


/**
 * Get all
 */

route.get('/', async (req, res, next) => {
    try {
        const result = await Customer
            .find()
            .select({ name: 1, phone: 1, isGold: 1 })
            .sort({ name: 1 });
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

/**
* Get by id
*/

route.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Customer
            .find({ _id: id })
            .select({ name: 1, phone: 1, isGold: 1 })
            .sort({ name: 1 });
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


/**
 * Create new
*/
route.post('/', async (req, res, next) => {
    try {
        const newCustomer = new Customer({
            name: req.body.name,
            phone: req.body.phone,
            isGold: req.body.isGold
        });
        const result = await newCustomer.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

/**
* Update
*/
route.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Customer.findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                phone: req.body.phone,
                isGold: req.body.isGold
            }
        }, { new: true });
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

/**
* Delete
*/
route.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Customer.findByIdAndRemove(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// export

module.exports = route;