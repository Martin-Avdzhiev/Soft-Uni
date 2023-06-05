const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name must be at least 2 symbols long!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: /^https?:\/\//
    },
    price: {
        type: Number,
        required: [true, 'Price is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Name must be at least 10 symbols long!']
    },
    paymentMethod: {
        type: String,
        enum: {
            values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
            message: 'Invalid payment method'
        },
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    buyers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
})

const Crypto = mongoose.model('Crypto', cryptoSchema);
module.exports = Crypto;