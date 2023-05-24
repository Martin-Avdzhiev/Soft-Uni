const router = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const Cube = require('./models/Cube');

router.get('/', homeController.getHomePage);

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/cubes/:id/details', cubeController.getDetails);
router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.use('/accessories', accessoryController);

router.get('/cubes/:id/attach', cubeController.getAttachAccessory);
router.post('/cubes/:id/attach', cubeController.postAttachAccessory);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;

