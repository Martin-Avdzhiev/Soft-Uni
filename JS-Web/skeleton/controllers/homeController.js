const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const User = require('../models/User');
router.get('/', (req, res) => {
    if (req.query) {
        if (req.query.error) {
            res.render('home', { message: req.query.error });
        }
        else {
            res.render('home');
        }
    }
    else {
        res.render('home');
    }
})


router.all('*', (req, res) => {
    res.render('404');
})

module.exports = router;