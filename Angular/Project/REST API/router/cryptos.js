const express = require('express');
const router = express.Router();
const CryptoModel = require('../models/crypto');



 router.get('/all', async (req ,res)=> {


    const currentCrypto = await CryptoModel.find();

    res.json(currentCrypto)
})

router.get('/', async(req,res)=> {
    const data = req.body;
    console.log({"hello": "hi"})
    const currentCrypto = await CryptoModel.find();

   
})

router.get('/:id', async(req ,res)=> {
    const currentCrypto = await CryptoModel.findOne({id: req.params.id})
    res.json(currentCrypto)
})




router.post('/:id', async(req,res)=> {
    const data = req.body;
    const id = req.params.id;
  //  const crypto = await CryptoModel.create(data);

})

module.exports = router;