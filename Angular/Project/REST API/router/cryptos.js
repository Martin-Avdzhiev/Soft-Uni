const express = require('express');
const router = express.Router();
const CryptoModel = require('../models/crypto');


router.get('/:id', async(req ,res)=> {
    const currentCrypto = await CryptoModel.findOne({id: req.params.id})
   // console.log(currentCrypto)
    res.json(currentCrypto)
})












router.get('/', async(req,res)=> {
    const data = req.body;
    console.log({"hello": "hi"})
    console.log(data)
   
})

router.post('/:id', async(req,res)=> {
    const data = req.body;
    const id = req.params.id;
  //  const crypto = await CryptoModel.create(data);

})

module.exports = router;