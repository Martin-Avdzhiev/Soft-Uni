const Cube = require('../models/Cube');
exports.getOne = (id) => Cube.findById(id);