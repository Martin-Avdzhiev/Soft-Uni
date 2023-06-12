const mongoose = require('mongoose');

const auctionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 4
    },
    description: {
        type: String,
        required: true,
        maxLength: 200
    },
    category: {
        type: String,
        required: true,
        enum: ['vehicles', 'real estate', 'electronics', 'furniture', 'other']
    },
    imageUrl: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    author: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    bidderId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    isClosed: {
        type: Boolean,
        ref: 'User'
    }



})

const Auction = mongoose.model('Auction', auctionSchema);
module.exports = Auction;