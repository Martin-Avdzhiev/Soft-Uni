const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username is required!']
    },
    email: {
        type: String,
        required: [true,'Email is required!']
    },
    hashedPassword: {
        type: String,
        required: [true,'Password is required!']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;