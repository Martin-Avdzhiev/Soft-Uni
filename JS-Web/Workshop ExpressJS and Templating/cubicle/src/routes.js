const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const router = require('express').Router();
const database = require('./database/cubes.json');

router.get('/', homeController.getHomePage);

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/details/:id', (req, res) => {
    const paramsObj = req.params;
    const id = paramsObj.id;
    const cube = database.cubes.filter(x => x["id"] == id)[0];
    res.render('details', cube);
})
router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
module.exports = router;
router.get('*', (req, res) => {
    res.render('404');
})

