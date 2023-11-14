const express = require('express');
const router = express.Router();
const CarModel = require('../models/car');
const {
    userModel,
    tokenBlacklistModel
} = require('../models');



router.get('/:id', async (req, res) => {
    const currentCar = await CarModel.findById(req.params.id);
    res.json(currentCar);
})


router.get('/', async (req, res) => {
    const allCars = await CarModel.find();
    res.status(200).send(allCars);

})

module.exports = router;