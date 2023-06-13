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
       // const message = Object.values(error.errors)[0].message;
        return res.status(404).render('login', {error}); // {message}
    }
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const {  email, password,repeatPassword, description } = req.body;
    try {
        await authService.register( email, password, repeatPassword,description);
        const token = await authService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        // const message = Object.values(error.errors)[0].message;
        return res.status(404).render('register', {error}); // {message}
    }

});

router.get('/logout', authentication, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})


module.exports = router;