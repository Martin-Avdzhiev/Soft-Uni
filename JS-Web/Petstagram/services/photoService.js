const Photo = require('../models/Photo');

exports.create = (ownerId, photoData) => Photo.create({...photoData, owner: ownerId});
exports.getAll = () => Photo.find({});
exports.getOne = (id) => Photo.findById(id);