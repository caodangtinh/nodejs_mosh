const mongoose = require('mongoose');

// create schema
const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

// create model

const Genre = mongoose.model('Genre', genreSchema);

// export model to reuse

module.exports = Genre;