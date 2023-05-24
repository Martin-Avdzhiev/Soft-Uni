const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const router = require('express').Router();
const Cube = require('./models/Cube');

router.get('/', homeController.getHomePage);

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/cubes/details/:id', async (req, res) => {
    const paramsObj = req.params;
    const id = paramsObj.id;
    try {
        const cube = await Cube.findById(id).lean();
        res.render('details', cube);
    } catch (error) {
        res.redirect('/404');
    }
})
router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('*', (req, res) => {
    res.render('404');
});
module.exports = router;

