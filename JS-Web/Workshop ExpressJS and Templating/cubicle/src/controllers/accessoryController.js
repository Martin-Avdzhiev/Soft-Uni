const router = require('express').Router();
const Accessory = require('../models/Accessory');
router.get('/create', (req, res) => {
    res.render('createAccessory');
});

router.post('/create', async (req, res) => {
    try {
        const { name, imageUrl, description } = req.body;
        await Accessory.create({ name, imageUrl, description })
        res.redirect('/');
    } catch (error) {
        res.redirect('/404');
        console.log(error.message);
    }

})
module.exports = router;