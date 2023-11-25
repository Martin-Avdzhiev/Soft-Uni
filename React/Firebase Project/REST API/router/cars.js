const express = require('express');
const mongoose = require('mongoose');
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
router.put('/:id', async (req, res) => {
    try {
        const updatedCar = req.body;
        const result = await CarModel.findByIdAndUpdate(req.params.id, updatedCar);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(404).send({ message: 'There is no car with this id!' });
    }
})
router.delete('/:id', async (req, res) => {
    try {

        const car = await CarModel.findByIdAndDelete(req.params.id);
        const owner = await userModel.findById(car.owner);
        for (let index = 0; index < owner.ownCars.length; index++) {
            if (owner.ownCars[index] == req.params.id) {
                owner.ownCars.splice(index, 1);
                break;
            }
        }
        await userModel.findByIdAndUpdate(owner._id, owner);
        res.status(200).send({ message: 'Successfull deleted' })
    } catch (error) {
        return res.status(404).send({ message: 'There is no car with this id!' });
    }
})

router.get('/', async (req, res) => {
    try {
        console.log(mongoose.connection.readyState);
        console.log(process.env.CONNECTION)
        const allCars = await CarModel.find();
        return res.status(200).send(allCars);
    } catch (error) {
        return res.status(404).send({ message: 'Couldn\'t find cars.' })
    }

})


module.exports = router;