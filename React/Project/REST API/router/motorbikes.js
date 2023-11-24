const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const MotorbikeModel = require('../models/motorbike')
const {
    userModel,
    tokenBlacklistModel
} = require('../models');
router.get('/:id', async (req, res) => {
    try {
        const currentMotorbikes = await MotorbikeModel.findById(req.params.id);
        res.json(currentMotorbikes);
    } catch (error) {
        return res.status(404).send({message: 'There is no motorbike with this id!'});
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedMotorbike = req.body;
        const result = await MotorbikeModel.findByIdAndUpdate(req.params.id, updatedMotorbike);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(404).send({ message: 'There is no motorbike with this id!' });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const motorbike = await MotorbikeModel.findByIdAndDelete(req.params.id);
        const owner = await userModel.findById(motorbike.owner);
        for (let index = 0; index < owner.ownMotorbikes.length; index++) {
            if(owner.ownMotorbikes[index] == req.params.id){
                owner.ownMotorbikes.splice(index, 1);
                break;
            }
        }
        await userModel.findByIdAndUpdate(owner._id, owner);
        res.status(200).send({ message: 'Successfull deleted' })
    } catch (error) {
        return res.status(404).send({ message: 'There is no motorbike with this id!' });
    }
})

router.post('/create', async (req, res) => {
    try {
        const newMotorbike = req.body;
        const owner = await userModel.findById(newMotorbike.owner);
        const newMotorbikeModel = await MotorbikeModel.create(newMotorbike);
        owner.ownMotorbikes.push(newMotorbikeModel._id);
        await userModel.findByIdAndUpdate(newMotorbike.owner, owner);
        res.status(200).send(newMotorbike);
    } catch (error) {
        console.error(error);
        res.status(401).send('Something happen :(');
    }
});

router.get('/', async (req, res) => {
    const allMotorbikes = await MotorbikeModel.find();
    res.status(200).send(allMotorbikes);
})

module.exports = router