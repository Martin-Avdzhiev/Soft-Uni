const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,'First Name is required!'],
        minLength: 3
    },
    lastName: {
        type: String,
        required: [true,'Last Name is required!'],
        minLength: 5
    },
    email: {
        type: String,
        required: [true,'Email is required!'],
        match: /[\w+]+@{1}[\w+]+\.{1}[\w+]+/
    },
    hashedPassword: {
        type: String,
        required: [true,'Password is required!']
    },
    myPost: [{
        type: mongoose.Types.ObjectId,
        ref:'Post'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;