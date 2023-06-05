const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2
    },
    image: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    age: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    location: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    commentList: [{
        comment: {
            type: String
        },
        commentator: {
            type: mongoose.Types.ObjectId
        }
    }]
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;