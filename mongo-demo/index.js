const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/playground')
    .then(console.log('Connected to mongodb ...'))
    .catch(error => console.log('Error when trying to connect : ' + error.message));

const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// create class definition from Schema
const Course = mongoose.model('Course', courseSchema);

// create class instance
async function createCourse() {
    const nodeCourse = new Course({
        name: 'Node.js course',
        author: 'tinhcao',
        tags: ['node', 'nodejs', 'backend'],
        isPublished: true
    });
    const result = await nodeCourse.save();
    console.log(result);
};

// getting data
async function getCourses() {
    const courses = await Course
        .find({ author: /ti*/ })
        .sort({ name: -1 })
        .select({ name: 1, author: 1 });
    console.log(courses);
}
getCourses();