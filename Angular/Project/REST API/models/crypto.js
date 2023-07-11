const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const CryptoSchema = new mongoose.Schema({
    oldPrice: {
        type: number
    }

});

module.exports = mongoose.model('Crypto', CryptoSchema);