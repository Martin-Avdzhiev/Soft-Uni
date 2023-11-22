const express = require('express');
const router = express.Router();
const CarModel = require('../models/car');
const {
    userModel,
    tokenBlacklistModel
} = require('../models');

router.post('/create', async (req, res) => {
    try {
        const newCar = req.body;
        const owner = await userModel.findById(newCar.owner);

        const newCarModel = await CarModel.create(newCar);
        owner.ownCars.push(newCarModel._id);
        await userModel.findByIdAndUpdate(newCar.owner, owner);
        res.status(200).send(newCar);
    } catch (error) {
        console.error(error);
        res.status(401).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const currentCar = await CarModel.findById(req.params.id);
        res.json(currentCar);
    } catch (error) {
        return res.status(404).send({ message: 'There is no car with this id!' });
    }
})


router.get('/', async (req, res) => {
    const allCars = await CarModel.find();
    res.status(200).send(allCars);

})

module.exports = router;