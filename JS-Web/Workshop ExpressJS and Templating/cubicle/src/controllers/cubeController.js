const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.getDetails = async (req, res) => {
    const paramsObj = req.params;
    const id = paramsObj.id;
    try {
        const cube = await Cube.findById(id).populate('accessories').lean();
        res.render('updatedDetailsPage', cube);
    } catch (error) {
        res.redirect('/404');
    }
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
       // console.log(accessories)
        res.render('attachAccessory', { cube, accessories } );
    } catch (error) {
        console.log(error);
    }
}

exports.postAttachAccessory = async (req, res) => {
    try {
        const id = req.params.id;
        const cube = await Cube.findById(id);
        const accessoryId = req.body.accessory;

        for(const currentId of cube.accessories){
            if(accessoryId == currentId.toString()){
                return res.redirect(`/cubes/${id}/details`);
            }
        }
        cube.accessories.push(accessoryId);
        await cube.save();
        res.redirect(`/cubes/${id}/details`);
    } catch (error) {
        console.log(error);
    }
}