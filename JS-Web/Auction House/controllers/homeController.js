const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('hi')
    res.render('home');

})

router.get('/register', (req, res) => {
    res.render('register')
    console.log('hi')
})

router.get('/login', (req, res) => {
    res.render('login')
    console.log('hi')
})

module.exports = router;