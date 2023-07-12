const express = require('express');
const router = express.Router();
const CryptoModel = require('../models/crypto');


router.get('/:id', async(req ,res)=> {
    //const currentCrypto = CryptoModel.findOne({id: req.params.id})
    console.log('hi')
})

router.get('/', async(req,res)=> {
    const data = req.body;
    console.log('hi')
    console.log(data)
})

router.post('/:id', async(req,res)=> {
    const data = req.body;
    const id = req.params.id;
    const crypto = await CryptoModel.create(data);
    console.log(id)
    console.log(data)
})

module.exports = router;