const mongoose = require('mongoose');
// connect to mongodb
mongoose.connect('mongodb://localhost:27017/playground')
    .then(result => console.log('Success connect to mongodb ...'))
    .catch(error => console.log('Errow while trying to connect to mongodb ' + error.message));

// create schema
const schema = mongoose.Schema({
    name: String,
    age: Number,
    dob: { type: Date, default: Date.now },
    address: String,
    hobbies: [String]
});

// get class from schema
const Person = mongoose.model('Person', schema);

// create instance
async function createPerson() {
    for (i = 0; i < 100; i++) {
        const mosh = new Person({
            name: 'mosh',
            age: i,
            address: 'El Segundo, CA',
            hobbies: ['coding', 'nodejs']
        });
        const result = await mosh.save();
    }
}
// createPerson();
getPerson();

// query data
async function getPerson() {
    const page = 1;
    const pageSize = 20;
    const result = await Person
        .find()
        .skip((page - 1) * 20)
        .limit(pageSize);
    console.log(result);
}