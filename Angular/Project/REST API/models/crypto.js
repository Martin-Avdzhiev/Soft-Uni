const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const CryptoSchema = new mongoose.Schema({
    oldPrice: {
        type: number
    }

});

const CryptoModel = mongoose.model('Crypto', CryptoSchema);

module.exports = CryptoModel;