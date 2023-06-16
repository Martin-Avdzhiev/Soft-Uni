const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,'Title Name is required!'],
        minLength: 6
    },
    keyword: {
        type: String,
        required: [true,'keyword Name is required!'],
        minLength: 6
    },
    location: {
        type: String,
        required: [true,'location Name is required!']
    },
    date: {
        type: String,
        required: [true,'date Name is required!'],
        match: /\w{10}/
    },
    image: {
        type: String,
        required: [true,'image Name is required!'],
        match: /^https?:\/\//
    },
    description: {
        type: String,
        required: [true,'description Name is required!'],
        minLength: 8
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    votes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    rating: {
        type: Number,
        default: 0
    }
})


const Post = mongoose.model('Post', postSchema);

module.exports = Post;