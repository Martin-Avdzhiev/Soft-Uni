const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const MotorbikeModel = require('../models/motorbike')

router.get('/:id', async (req, res) => {
    const currentMotorbikes = await MotorbikeModel.findById(req.params.id)
    res.json(currentMotorbikes)
})


router.get('/', async (req, res) => {
    const allMotorbikes = await MotorbikeModel.find();
    res.status(200).send(allMotorbikes);

})

module.exports = router