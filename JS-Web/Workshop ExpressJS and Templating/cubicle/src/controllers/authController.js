const router = require('express').Router();
const authService = require('../services/authService');
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await authService.login(username, password);
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/')
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }
})
router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    if (password !== repeatPassword) {
        return res.status(404).end();
    }
    const existingUser = await authService.getUserByUsername(username);
    if (existingUser) {
        return res.status(404).end();
    }
    const user = await authService.register(username, password);

    res.redirect('/auth/login');
})
router.get('/logout', (req, res) => {
    res.redirect('/')
});

module.exports = router;