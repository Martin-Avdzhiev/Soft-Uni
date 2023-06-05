const Crypto = require('../models/Crypto');
exports.create = (ownerId, cryptoData) => Crypto.create({ ...cryptoData, owner: ownerId });
exports.getAll = () => Crypto.find({});
exports.getOne = (id) => Crypto.findById(id);
exports.buy = async (userId, cryptoId, isOwner, isBought) => {
    if (isOwner || isBought.length != 0) {
        return;
    }
    const crypto = await Crypto.findById(cryptoId);
    crypto.buyers.push(userId);
    return crypto.save();
}

exports.getOptions = () => {
    return {
        paymentMethods: [
            { value: 'crypto-wallet', label: 'Crypto Wallet', selected: false },
            { value: 'credit-card', label: 'Credit Card', selected: false },
            { value: 'debit-card', label: 'Debit Card', selected: false },
            { value: 'paypal', label: 'PayPal', selected: false },
        ]
    }
}

exports.search = async (name, paymentMethod) => {
    let crypto = await this.getAll().lean();
    if(name){
        crypto = crypto.filter(x => x.name.toLowerCase().includes(name));
    }

    if(paymentMethod){
        crypto = crypto.filter(x => x.paymentMethod.toLowerCase() == paymentMethod);
    }
    return crypto;
}