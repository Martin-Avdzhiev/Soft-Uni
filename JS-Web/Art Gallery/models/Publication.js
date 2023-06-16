const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    paintingTechnique: {
        type: String,
        required: [true, 'Painting Technique is required!']
    },
    artPicture: {
        type: String,
        required: [true, 'Art Picture is required!'],
        match: /^https?:\/\//
    },
    certificateOfAuthenticity: {
        type: String,
        required: [true, 'Certificate Of Authenticity is required!'],
        enum: {
            values: ['Yes', 'No'],
            message: 'Certificate must be a value of Yes or No!'
        },

    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersShared: [{
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    }]
})

const Publication = mongoose.model('Publicatiom', publicationSchema);

module.exports = Publication;