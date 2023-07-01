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
        const message = error.message
        return res.render('login', {message});
    }
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const {email, password, repeatPassword } = req.body;
    try {
        await authService.register(email, password, repeatPassword);
        const token = await authService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        const message = error.message
        return res.render('register', {message});
    }

});

router.get('/logout', authentication, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

module.exports = router;