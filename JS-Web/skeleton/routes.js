const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');

router.use(authController);
router.use(homeController);

module.exports = router;