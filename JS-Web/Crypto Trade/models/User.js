const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username is required!'],
        minLength: [5, 'Username need to be 5 symbols or more!']
    },
    email: {
        type: String,
        required: [true,'Email is required!'],
        minLength: [10, 'Email need to be 10 symbols or more!']
    },
    hashedPassword: {
        type: String,
        required: [true,'Password is required!']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;