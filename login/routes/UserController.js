const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');
const { User, validate } = require('../model/User');
const Hash = require('../utils/Hash');

/**
 * Create new user
 */
route.post('/', async (req, res, next) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    };
    let user = await User.findOne({ email: { $eq: req.body.email } });
    if (user) {
        return res.status(400).send('User already registered');
    };
    const newUser = new User(_.pick(req.body, ['name', 'email', 'password']));
    const hashPassword = await Hash.hashPassword(newUser.password, 10);
    newUser.password = hashPassword;
    // const newUser = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    try {
        const result = await newUser.save();
        res.status(201).send(_.pick(result, ['_id', 'name', 'email']));
    } catch (error) {
        res.status(400).send('Error while trying to save new User ' + error.message);
    }
});
module.exports = route;