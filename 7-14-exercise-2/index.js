// import
const mongoose = require('mongoose');
// connect
mongoose.connect('mongodb://127.0.0.1:27017/mongo-exercises')
    .then((result) => console.log('Successful connect to mongodb'))
    .catch(error => console.log(error.message));
// create schema
const schema = mongoose.Schema({
    name: String,
    author: String,
    date: { type: Date, default: Date.now() },
    isPublished: Boolean,
    tags: [String]
});
// create model
const MyModel = mongoose.model('Course', schema);
// query
async function getValue() {
    return await MyModel
    .find({ isPublished: { $eq: true } })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });    
};

async function displayCourse() {
    const result = await getValue();
    console.log(result);
};
displayCourse();
