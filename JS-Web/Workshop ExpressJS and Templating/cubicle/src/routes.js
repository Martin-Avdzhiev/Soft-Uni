const cubeController = require('./controllers/cubeController');
const router = require('express').Router();
const database = require('./database/cubes.json');

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/details/:id', (req, res) => {
    const paramsObj = req.params;
    const id = paramsObj.id;
    const cube = database.id;
    res.send(JSON.stringify(database))
    //res.render('details');
})
router.get('/create', cubeController.getCreateCube);

module.exports = router;