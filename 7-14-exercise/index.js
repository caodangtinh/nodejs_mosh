const mongoose = require('mongoose');

// connect to mongodb database
mongoose.connect('mongodb://localhost:27017/mongo-exercises')
    .then(result => console.log('Connect success'))
    .catch(error => console.log('Error when trying to connect mongodb'));

// define schema
const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    date: { type: Date, default: Date.now() },
    tags: [String],
    isPublished: Boolean,
    price: Number
});

// get model from Schema
const Course = mongoose.model("Course", courseSchema);

// get Course by condition
async function getListCourse() {
    return await Course
        .find({ isPublished: true, tags: { $in: ['backend'] } })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 });
};

async function displayCourse() {
    const result = await getListCourse();
    console.log(result);
};
displayCourse();