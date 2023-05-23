const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = async (req, res) => {
    try {
        const { name, description, imageUrl, difficultyLevel } =  req.body;
        let cube = new Cube({ name, description, imageUrl, difficultyLevel });
       // console.log(cube)
        await cube.save();
        res.redirect('/');      
    } catch (error) {
        console.log(error)
    }
  
}