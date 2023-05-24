const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = async (req, res) => {
    try {
        const { name, description, imageUrl, difficultyLevel } =  req.body;
        let cube = new Cube({ name, description, imageUrl, difficultyLevel });
        await cube.save();
        res.redirect('/');      
    } catch (error) {
        console.log(error);
    }
}

exports.getAttachAccessory = async (req, res) => {
    try {
        const id = req.params.id;
        const cube = await Cube.findById(id).lean();
        const accessories = await Accessory.find().lean();
        console.log(accessories)
        res.render('attachAccessory', { cube, accessories } );
    } catch (error) {
        console.log(error);
    }
}