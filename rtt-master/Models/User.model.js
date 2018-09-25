const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstName: {
        type: String, required: [true, 'Please enter your first name.']
    },
    lastName: {
        type: String, required: [true, 'Please enter your last name.']
    },
    Email: {
        type: String,
        required: 'Please enter a valid email address'
    },
    Password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    Age: { type: String, required: true },
    Sex: { type: String, required: true },
    Address: { type: String, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    ZipCode: { type: Number, required: true }
})

module.exports = mongoose.model('User', UserSchema);