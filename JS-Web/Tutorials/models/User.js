const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username is required!']
    },
    hashedPassword: {
        type: String,
        required: [true,'Password is required!']
    },
    enrolledCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;