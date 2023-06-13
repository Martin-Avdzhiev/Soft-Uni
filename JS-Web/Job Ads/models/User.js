const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,'Email is required!'],
        match: /[\w+]+@{1}[\w+]+\.{1}[\w+]+/
    },
    hashedPassword: {
        type: String,
        required: [true,'Password is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxlength: 40
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;