const jwt = require('jsonwebtoken');
const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');
const { User, validate } = require('../model/User');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const config = require('config');
/**
 * Login
 */
route.post('/', async (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    };
    let user = await User.findOne({ email: { $eq: req.body.email } });
    if (!user) {
        return res.status(400).send('Invalid email or password');
    };
    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result)
        return res.status(404).send('Invalid email or password');
    const token = jwt.sign((_.pick(user, ['_id', 'name', 'email'])), config.get('jwtPrivateKey'));
    res.status(200).header('token', token).send(token);
});

// Joi validation
function validateUser(user) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    }
    return Joi.validate(user, schema);
}

module.exports = route;