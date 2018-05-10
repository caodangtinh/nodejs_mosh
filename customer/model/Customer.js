const mongoose = require('mongoose');

// create schema
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 11
    },
    isGold: {
        type: Boolean,
        default: false
    }
});

// create model
const Customer = mongoose.model('Customer', schema);

// export
module.exports = Customer;