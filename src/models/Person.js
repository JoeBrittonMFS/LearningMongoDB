const mongoose = require('mongoose');
const validator = require('validator');

const personSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    age: {
        type: Number
    },
    likesPizza: {
        type: Boolean
    },
});

const Person = mongoose.model('Person', personSchema);

module.exports = {
    Person,
};