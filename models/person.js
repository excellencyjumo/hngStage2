const { Schema, mongoose } = require('mongoose');

const person = new Schema({
    name: {
        type: String,
        required: true,
    },
})

const Person = mongoose.model('Person', person);

module.exports = Person