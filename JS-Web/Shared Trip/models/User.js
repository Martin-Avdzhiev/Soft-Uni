const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: [true, 'Gender is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!']
    },
    hashedPassword: {
        type: String,
        required: [true, 'Password is required!']
    },
    tripsHistory: [{
        tripId: {
            type: mongoose.Types.ObjectId,
            ref: 'Trip'
        }
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;