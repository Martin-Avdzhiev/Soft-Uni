const router = require('express').Router();
const users = require('./users');
const motorbikes = require('./motorbikes');
const cars = require('./cars');
const { authController } = require('../controllers');
const dbConnector = require('../config/db');

var client
const getClient = async () => {
    if (client) {
        console.log("DB CLIENT ALREADY CONNECTED");
    } else
        try {
            client = await dbConnector();
            console.log("DB CLIENT RECONNECTED");
        } catch (error) {
            console.log(error)
        }

    return client;
};
router.use('*', async (req, res, next) => {
    try {
        await getClient();
        next();
    } catch (error) {
        console.log(error)
    }
})
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/user', users);
router.use('/motorbikes', motorbikes);
router.use('/cars', cars)


module.exports = router;
