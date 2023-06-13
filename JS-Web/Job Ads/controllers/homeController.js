const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const Ad = require('../models/Ad');
const User = require('../models/User');
router.get('/', (req, res) => {
    res.render('home');
})

router.get('/create', isAuth, (req, res) => {
    res.render('create');
})


router.post('/create', isAuth, async (req, res) => {
    try {
        const data = req.body;
        data.author = req.user._id;
        await Ad.create(data);
        res.redirect('/all');
    } catch (error) {
        console.log(error.message)
    }

})

router.get('/all', async (req, res) => {
    const ads = await Ad.find().lean();
    res.render('all-ads', { ads });
})

router.get('/all/:id/details', async (req, res) => {
    const ad = await Ad.findById(req.params.id).lean();
    let owner = false;
    let guest = true;
    let applied = false;
    const user = req.user;
    const author = await User.findById(ad.author);
    const authorEmail = author.email;
    const appliers = [];
    if (user) {
        guest = false;
        if (user._id.toString() == ad.author.toString()) {
            owner = true;
        }

        for (const apllier of ad.usersApplied) {
            if (apllier.toString() == user._id.toString()) {
                applied = true;
            }
            const userApplier = await User.findById(apllier.toString()).lean();
            appliers.push(userApplier);
        }
    }
    const length = appliers.length;
    res.render('details', { ad, owner, guest, authorEmail, applied, appliers, length })
})

router.get('/all/:id/edit', isAuth, async (req, res) => {
    const ad = await Ad.findById(req.params.id).lean();
    if (req.user._id.toString() != ad.author.toString()) {
        return res.redirect('/');
    }
    res.render('edit', { ad })
})

router.post('/all/:id/edit', isAuth, async (req, res) => {
    const data = req.body;
    const ad = await Ad.findById(req.params.id).lean();
    if (req.user._id.toString() != ad.author.toString()) {
        return res.redirect('/');
    }
    await Ad.findByIdAndUpdate(req.params.id, data, { runValidators: true });
    res.redirect(`/all/${req.params.id}/details`);
})

router.get('/all/:id/delete', isAuth, async (req, res) => {
    const ad = await Ad.findById(req.params.id).lean();
    if (req.user._id.toString() != ad.author.toString()) {
        return res.redirect('/');
    }
    await Ad.findByIdAndDelete(req.params.id);
    res.redirect('/all');
})

router.get('/all/:id/apply', isAuth, async (req, res) => {
    const ad = await Ad.findById(req.params.id);
    if (!ad.usersApplied) {
        ad.usersApplied = [];
    }
    if (req.user._id.toString() == ad.author.toString()) {
        return res.redirect('/');
    }
    ad.usersApplied.push(req.user._id);
    await Ad.findByIdAndUpdate(req.params.id, ad);
    res.redirect(`/all/${req.params.id}/details`);
})

router.get('/search', (req, res) => {
    res.render('search')
})


router.post('/search', async (req, res) => {
    const email = req.body.email.toLowerCase();
    const user = await User.findOne({ email }).lean();
    let result = []
    if (user){
        const userId = user._id;
        result = await Ad.find({author: userId}).lean();
    }
    const isSearched = true;
    res.render('search', {result, isSearched})
})
router.all('*', (req, res) => {
    res.render('404');
})


module.exports = router;