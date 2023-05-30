const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const cubeService = require('../services/cubeService');
const cubeUtils = require('../utils/cubeUtils');

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.getDetails = async (req, res) => {
    const paramsObj = req.params;
    const id = paramsObj.id;
    try {
        const cube = await Cube.findById(id).populate('accessories').lean();
        const isOwner = cube.owner == req.user._id;
        res.render('cube/updatedDetailsPage', {cube, isOwner});
    } catch (error) {
        res.redirect('/404');
    }
}

exports.postCreateCube = async (req, res) => {
    try {
        const { name, description, imageUrl, difficultyLevel } = req.body;
        let cube = new Cube({ name,
             description,
             imageUrl,
             difficultyLevel,
             owner: req.user._id
         });
        await cube.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }
}

exports.getAttachAccessory = async (req, res) => {
    try {
        const id = req.params.id;
        const cube = await Cube.findById(id).lean();
        const accessories = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();
        res.render('accessory/attachAccessory', { cube, accessories });
    } catch (error) {
        console.log(error);
    }
}

exports.postAttachAccessory = async (req, res) => {
    try {
        const id = req.params.id;
        const cube = await Cube.findById(id);
        const accessoryId = req.body.accessory;

        for (const currentId of cube.accessories) {
            if (accessoryId == currentId.toString()) {
                return res.redirect(`/cubes/${id}/details`);
            }
        }
        cube.accessories.push(accessoryId);
        await cube.save();
        res.redirect(`/cubes/${id}/details`);
    } catch (error) {
        console.log(error);
    }
};
exports.getEditCube = async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();
    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel);
    if(!cubeUtils.isOwner(req.user, cube)){
        return res.redirect('/404');
    }
    res.render('cube/editCubePage', { cube, difficultyLevels });
}

exports.postEditCube = async(req,res) =>{
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.update(req.params.id, { name, description, imageUrl, difficultyLevel });
    res.redirect(`/cubes/${req.params.id}/details`);
}
exports.getDeleteCube = async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();
    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel);
    res.render('cube/deleteCubePage', { cube, difficultyLevels });
}

exports.postDeleteCube = async(req,res) =>{
    await Cube.findByIdAndDelete(req.params.id);
    res.redirect(`/`);
}