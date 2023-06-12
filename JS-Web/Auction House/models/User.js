const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,'First name is required!']
    },
    lastName: {
        type: String,
        required: [true,'Last name is required!']
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
    closedAuction: []
});

const User = mongoose.model('User', userSchema);

module.exports = User;