const crypto = require('crypto');
const database = require('../database/cubes.json');
const fs = require('fs');
const path = require('path');
exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = (req, res) => {
    const id = crypto.randomBytes(16).toString('hex');
    const cube = {
        id: id,
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: Number(req.body.difficultyLevel)
    }
    database.cubes.push(cube);
    const json = JSON.stringify(database, null, 2);
    fs.writeFileSync(path.resolve(__dirname, '../database/cubes.json'), json);
    res.redirect('/')
}