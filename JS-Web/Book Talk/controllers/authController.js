const router = require('express').Router();
const authService = require('../services/authService');
const { authentication } = require('../middlewares/authMiddleware');
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        //const message = Object.values(error.errors)[0].message;
        console.log(error.message)
        return res.status(404).render('login');
    }
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;
    try {
        await authService.register(username, email, password, repeatPassword);
        const token = await authService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        //const message = Object.values(error.errors)[0].message;
        console.log(error.message)
        return res.status(404).render('register');
    }

});

router.get('/logout', authentication, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

module.exports = router;