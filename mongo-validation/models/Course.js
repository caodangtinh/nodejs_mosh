const mongoose = require('mongoose');

// define schema
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now() },
    isPublished: Boolean,
    price: Number
});

// get Model from schema
const Course = mongoose.model('Course', schema);

// export Model
module.exports = Course;