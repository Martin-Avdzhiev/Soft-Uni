const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: 2
    },
    years: {
        type: Number,
        required: [true, 'Years is required!'],
        min: 1,
        max: 100
    },
    kind: {
        type: String,
        required: [true, 'Kind is required!'],
        minLength: 3
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: /^https?:\/\//
    },
    need: {
        type: String,
        required: [true, 'Need is required!'],
        minLength: 3,
        maxLength: 20
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: 5,
        maxLength: 15
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: 5,
        maxLength: 50
    },
    donations: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;