const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/playground')
    .then(console.log('Connected to mongodb ...'))
    .catch(error => console.log('Error when trying to connect : ' + error.message));

const courseSchema = mongoose.Schema({
    name: { type: String, required: true },
    category:{
        enu
    }
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000);
            }
        },
        message: 'A course should have at least one tag'
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished; }
    }
});

// create class definition from Schema
const Course = mongoose.model('Course', courseSchema);

// create class instance
async function createCourse() {
    const nodeCourse = new Course({
        name: 'Node.js course',
        author: 'tinhcao',
        // tags: ['node', 'nodejs', 'backend'],
        isPublished: true,
        price: 15
    });
    try {
        const result = await nodeCourse.save();
        console.log(result);
        // const result = await nodeCourse.save();
        // console.log(result);
    } catch (error) {
        console.log(error.message);
    }
};
createCourse();
// getting data
// async function getCourses() {
//     const courses = await Course
//         .find({ author: /ti*/ })
//         .sort({ name: -1 })
//         .select({ name: 1, author: 1 });
//     console.log(courses);
// }
// getCourses();