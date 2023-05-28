const Cube = require('../models/Cube');
exports.getOne = (id) => Cube.findById(id);
exports.update = (id, data) => Cube.findByIdAndUpdate(id, data, { runValidators: true });