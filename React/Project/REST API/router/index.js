const router = require('express').Router();
const users = require('./users');
const motorbikes = require('./motorbikes');
const cars = require('./cars');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/user', users);
router.use('/motorbikes', motorbikes);
router.use('/cars', cars)


module.exports = router;
