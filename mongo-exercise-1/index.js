const mongoose = require('mongoose');
// connect to mongodb
mongoose.connect('mongodb://localhost:27017/mongo-exercises')
    .then(console.log('Successful connect to Mongodb'))
    .catch(error => console.log('Error when trying to connect to mongodb ' + error.message));

// create schema
const schema = mongoose.Schema({
    author: String,
    name: String,
    date: { type: Date, default: Date.now },
    tags: [String],
    isPublished: Boolean,
    price: Number
});
// create model
const Course = mongoose.model('Course', schema);
// query data
async function getCourses() {
    const result = await Course
        .find({ isPublished: { $eq: true } })
        .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
        .sort({ price: -1 })
        .select({ name: 1, author: 1, price: 1 });
    console.log(result);
};
getCourses();