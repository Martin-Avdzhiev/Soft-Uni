const router = require('express').Router();

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

module.exports = router;