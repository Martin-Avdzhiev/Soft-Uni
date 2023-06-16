const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username is required!'],
        minLength: 4
    },
    address: {
        type: String,
        required: [true,'Address is required!'],
        minLength: 20
    },
    hashedPassword: {
        type: String,
        required: [true,'Password is required!']
    },
    myPublications: [{
        type: mongoose.Types.ObjectId,
        ref: 'Publication'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;