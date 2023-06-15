const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    startPoint: {
        type: String,
        required: [true, 'Start Point is required!'],
        minLength : 4
    },
    endPoint: {
        type: String,
        required: [true, 'End Point is required!'],
        minLength : 4
    },
    date: {
        type: String,
        required: [true, 'Date is required!']
    },
    time: {
        type: String,
        required: [true, 'Time is required!']
    },
    carImage: {
        type: String,
        required: [true, 'Car Image is required!'],
        match: /^https?:\/\//
    },
    carBrand: {
        type: String,
        required: [true, 'Car Brand is required!'],
        minLength : 4
    },
    seats: {
        type: Number,
        required: [true, 'Seats is required!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: 1,
        max:50
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength : 10
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    buddies: [{
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    }]
})

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;