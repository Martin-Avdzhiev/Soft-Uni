const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const MotorbikeModel = require('../models/motorbike')

router.get('/:id', async (req, res) => {
    try {
        const currentMotorbikes = await MotorbikeModel.findById(req.params.id);
        res.json(currentMotorbikes);
    } catch (error) {
        return res.status(404).send({message: 'There is no motorbike with this id!'});
    }
})

router.post('/create', async (req, res) => {
    try {
        const newMotorbike = req.body;
        await MotorbikeModel.create(newMotorbike);
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