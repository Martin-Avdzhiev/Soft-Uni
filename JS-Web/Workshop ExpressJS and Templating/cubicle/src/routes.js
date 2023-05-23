const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const router = require('express').Router();
const Cube = require('./models/Cube');

router.get('/', homeController.getHomePage);

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/cubes/:id/details', async (req, res) => {
    const paramsObj = req.params;
    const id = paramsObj.id;
    let cubes = await Cube.find().lean();
    const cube = cubes.filter(x => x["_id"] == id)[0];
    console.log(cube)
    res.render('details', cube);
})
router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('*', (req, res) => {
    res.render('404');
});
module.exports = router;

