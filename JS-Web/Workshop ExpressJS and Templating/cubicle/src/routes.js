const router = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const { isAuthenticated } = require('./middlewares/authMiddlewares');
const Cube = require('./models/Cube');

router.get('/', homeController.getHomePage);

router.get('/about', (req, res) => res.render('about'));
router.use('/auth', authController);
router.get('/cubes/:id/details', cubeController.getDetails);
router.get('/cubes/:id/edit', cubeController.getEditCube);
router.post('/cubes/:id/edit', cubeController.postEditCube);
router.get('/cubes/:id/delete', cubeController.getDeleteCube);
router.get('/cubes/create', isAuthenticated, cubeController.getCreateCube);
router.post('/cubes/create', isAuthenticated, cubeController.postCreateCube);
router.get('/cubes/:id/attach', cubeController.getAttachAccessory);
router.post('/cubes/:id/attach', cubeController.postAttachAccessory);

router.use('/accessories', accessoryController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;

