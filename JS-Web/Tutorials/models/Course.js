const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        unique: [true, 'Title is already used!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxLength: 50
    },
    image: {
        type: String,
        required: [true, 'Image is required!']
    },
    duration: {
        type: String,
        required: [true, 'Duration is required!']
    },
    timestamp: {
        type: Date,
        required:  [true, 'Timestamp is required!']
    },
    enrolledUsers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;