const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required!'],
        unique: [true, 'This hotel name already exist!'],
        minLength: 4
    },
    city: {
        type: String,
        required: [true,'City is required!'],
        minLength: 3
    },
    image: {
        type: String,
        required: [true,'Image is required!'],
        match: /^https?:\/\//
    },
    freeRooms: {
        type: Number,
        required: [true, 'Frerooms is required!'],
        min: 1,
        max: 100
    },
    bookedUsers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;