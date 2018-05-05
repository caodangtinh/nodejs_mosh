const mongoose = require('mongoose');

// connect to mongodb database
mongoose.connect('mongodb://localhost:27017/mongo-exercises')
    .then(() => console.log('Connect success'))
    .catch(error => console.log('Error when trying to connect mongodb'));

// define schema
const courseSchema = mongoose.Schema({
    name: {type: String, required: true},
    author: String,
    date: {type: Date, default: Date.now()},
    tags: [String],
    isPublished: Boolean,
    price: Number
});

// get model from Schema
const Course = mongoose.model("Course", courseSchema);

// get Course by condition
async function getListCourse() {
    return await Course
        .find({isPublished: true})
        .or([
            {price: {$gte: 15}}
            , {name: /.*by.*/i}
        ])
        .sort({name: 1})
        .select({name: 1, author: 1});
};

async function displayCourse() {
    const result = await getListCourse();
    console.log(result);
};
displayCourse();

//
async function updateCourse(id) {
    const course = await Course.findById(id);
    if (!course) {
        console.log('Not Found Course with id : ' + id);
        return;
    }
    course.set({
        isPublished: true,
        author: 'Another Author'
    });
    // save updated course
    const result = await course.save();
    console.log(result);
};

updateCourse('5a6900fff467be65019a9001');

