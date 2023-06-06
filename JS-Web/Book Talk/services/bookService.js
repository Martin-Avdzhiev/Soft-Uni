const Book = require('../models/Book');

exports.findAll = () => Book.find();
exports.findOne = (id) => Book.findById(id);
