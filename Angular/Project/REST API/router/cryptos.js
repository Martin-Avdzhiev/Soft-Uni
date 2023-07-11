const router = require('express').Router();
const CryptoModel = require('../models/crypto');
router.get('/cryptos/:id', async(req ,res)=> {
    const currentCrypto = CryptoModel.findOne({id: req.params.id})
})