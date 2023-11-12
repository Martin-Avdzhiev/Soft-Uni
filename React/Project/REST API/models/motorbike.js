const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const motorbikeSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    cubicCentimeter:{
        type: Number,
        required: true
    },
    mileage:{
        type: Number,
        required: true
    },
    city: {
        type:String,
        required: true
    },
    imageUrl: {
        type:String,
        required: true
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Motorbike', motorbikeSchema);
