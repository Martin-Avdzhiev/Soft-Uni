const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersApplied: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
})

const Ad = mongoose.model('Ad',adSchema);
module.exports = Ad;