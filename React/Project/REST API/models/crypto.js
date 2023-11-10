const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const CryptoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    supply: {
        type: String,
        required: true
    },
    maxSupply: {
        type: String
    },
    explorer: {
        type: String,
        required: true
    },
    descripton: {
        type:String,
        required: true
    },
    miniDescription: {
        type: String,
        required:true
    }
});

const CryptoModel = mongoose.model('Crypto', CryptoSchema);

module.exports = CryptoModel;