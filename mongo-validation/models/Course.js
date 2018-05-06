const mongoose = require('mongoose');

// define schema
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, cb) {
                setTimeout(function () {
                    const result = v && v.length > 0;
                    console.log('validation result : ' + result);
                    cb(result);
                }, 4000);
            },
            message: 'A course should have at least one tag.'
        }
    },
    date: { type: Date, default: Date.now() },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () {
            return this.isPublished;
        },
        min: 5,
        max: 200
    }
});

// get Model from schema
const Course = mongoose.model('Course', schema);

// export Model
module.exports = Course;