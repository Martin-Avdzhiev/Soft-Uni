const express = require('express');
const router = express.Router();
const CryptoModel = require('../models/crypto');
const {
    userModel,
    tokenBlacklistModel
} = require('../models');

router.post('/deposit', async (req,res)=> {
    const username = req.body.username;
    const amount = req.body.amount;
    const user = await userModel.findOne({username: username});
    user.walletBalance += amount;
    await userModel.findOneAndUpdate({username: username}, user);
    res.status(200).send(user);
})
router.post('/withdraw', async (req,res)=> {
    const username = req.body.username;
    const amount = req.body.amount;
    const user = await userModel.findOne({username: username});
    user.walletBalance -= amount;
    await userModel.findOneAndUpdate({username: username}, user);
    res.status(200).send(user);
})


router.post('/buy/:crypto', async (req,res)=> {
    const typeOfCrypto = req.params.crypto;
    const payingDollars = req.body.payingDollars;
    const amount = req.body.amount;
    if(amount == 0) {return res.status(401).send({message: 'You must enter the amount!'})}
    if(payingDollars < 10){return res.status(401).send({message: 'You can\'t buy less than $10 worth of crypto!'})}
    const username = req.body.username;
    let alreadyHave = false;
    const user = await userModel.findOne({username: username});
    if(user.walletBalance < payingDollars){
        return res.status(401).send({message: 'You dont have enough money!'});
    }
    user.walletBalance -= payingDollars;
    for(const crypto of user.ownCryptos){
        if(crypto.name == typeOfCrypto){
            crypto.amount += amount;
            alreadyHave = true;
        }
    }
    if(!alreadyHave){
        user.ownCryptos.push({
            name: typeOfCrypto,
            amount: amount
        })
    }
    await userModel.findOneAndUpdate({username: username}, user);
    res.status(200).send(user);
})


router.post('/sell/:crypto', async (req,res)=> {
    const typeOfCrypto = req.params.crypto;
    const receivingDollars = req.body.receivingDollars;
    const amount = req.body.amount;
    if(amount == 0) {return res.status(401).send({message: 'You must enter the amount!'})}
    if(receivingDollars < 10){return res.status(401).send({message: 'You can\'t sell less than $10 worth of crypto!'})}
    const username = req.body.username;
    let alreadyHave = false;
    const user = await userModel.findOne({username: username});

    for(const crypto of user.ownCryptos){
        if(crypto.name == typeOfCrypto){
            if(crypto.amount < amount){return res.status(401).send({message: 'You can\'t sell more than what you have!'})}
            alreadyHave = true;
            user.walletBalance += receivingDollars;
            crypto.amount -= amount;
        }
    }
    if(!alreadyHave){return res.status(401).send({message: 'You can\'t sell more than what you have!'});}
    await userModel.findOneAndUpdate({username: username}, user);
    res.status(200).send(user);
})



 router.get('/all', async (req ,res)=> {


    const currentCrypto = await CryptoModel.find();

    res.json(currentCrypto)
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

router.get('/', async(req,res)=> {
    const data = req.body;
    console.log({"hello": "hi"})
    const currentCrypto = await CryptoModel.find();

   
})

module.exports = router;