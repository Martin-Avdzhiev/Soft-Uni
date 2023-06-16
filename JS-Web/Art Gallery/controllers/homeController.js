const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const User = require('../models/User');
const Publication = require('../models/Publication');
router.get('/', async (req, res) => {
    const arts = await Publication.find().lean();
    for (const art of arts) {
        art.length = art.usersShared.length;
    }
    res.render('home', { arts });

})

router.get('/create', isAuth, (req, res) => {
    res.render('create');
})

router.post('/create', isAuth, async (req, res) => {
    try {
        const data = req.body;
        data.author = req.user._id;
        const art = await Publication.create(data);
        const user = await User.findById(req.user._id);
        if (!user.myPublications) {
            user.myPublications = [];
        }
        user.myPublications.push(art._id);
        await User.findByIdAndUpdate(req.user._id, user);
        res.redirect('/gallery');
    } catch (error) {
        const message = error.message;
        console.log(message)
        res.render('create', { message })
    }
})

router.get('/gallery', async (req, res) => {
    const arts = await Publication.find().lean();
    if (req.query) {
        if (req.query.error) {
            res.render('gallery', { arts, message: req.query.error });
        }
        else {
            res.render('gallery', { arts });
        }
    }
})

router.get('/gallery/:id/details', async (req, res) => {
    const art = await Publication.findById(req.params.id).lean();
    const author = await User.findById(art.author).lean();
    const username = author.username;
    let isShared = false;
    let user = false;
    let owner = false;
    if (req.user) {
        owner = req.user._id.toString() == art.author.toString();
        for (const usersShared of art.usersShared) {
            if (usersShared.userId.toString() == req.user._id.toString()) {
                isShared = true;
            }


        }

        user = true;
    }
    res.render('details', { art, username, owner, isShared })
})
router.get('/gallery/:id/edit', isAuth, async (req, res) => {
    try {
        const art = await Publication.findById(req.params.id).lean();
        if (art.author.toString() != req.user._id.toString()) {
            throw new Error('Only owner can edit or detele!');
        }
        res.render('edit', { art })
    } catch (error) {
        const message = error.message;
        res.redirect('/gallery?error=' + encodeURIComponent(message));
    }
})

router.post('/gallery/:id/edit', isAuth, async (req, res) => {
    try {
        const art = await Publication.findById(req.params.id).lean();
        if (art.author.toString() != req.user._id.toString()) {
            throw new Error('Only owner can edit or detele!');
        }
        await Publication.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
        res.redirect(`/gallery/${art._id}/details`)
    } catch (error) {
        const message = error.message;
        res.redirect('/gallery?error=' + encodeURIComponent(message));
    }

})

router.get('/gallery/:id/delete', isAuth, async (req, res) => {
    try {
        const art = await Publication.findById(req.params.id).lean();
        if (art.author.toString() != req.user._id.toString()) {
            throw new Error('Only owner can edit or detele!');
        }
        await Publication.findByIdAndDelete(req.params.id)
        res.redirect(`/gallery`)
    } catch (error) {
        const message = error.message;
        res.redirect('/gallery?error=' + encodeURIComponent(message));
    }

})

router.get('/gallery/:id/share', isAuth, async (req, res) => {
    try {
        const art = await Publication.findById(req.params.id).lean();
        if (!art.usersShared) {
            art.usersShared = [];
        }
        art.usersShared.push({ userId: req.user._id });
        if (art.author.toString() == req.user._id.toString()) {
            throw new Error('Owner cant share own publications!')
        }
        await Publication.findByIdAndUpdate(req.params.id, art);
        res.redirect(`/gallery/${req.params.id}/details`);
    } catch (error) {
        const message = error.message;
        res.redirect('/gallery?error=' + encodeURIComponent(message));
    }
})

router.get('/profile', isAuth, async (req, res) => {
    const user = await User.findById(req.user._id).lean();
    const ownArts = await Publication.find({ author: user._id }).lean();
    const titles = ownArts.map(x => x = x.title).join(', ');
    const arts = await Publication.find().lean();
    let sharedArts = [];
    for (const art of arts) {
        for (const usersShared of art.usersShared) {
            if (usersShared.userId.toString() == req.user._id.toString()) {
                sharedArts.push(art.title);
            }
        }
    }
    sharedArts = sharedArts.join(', ');
    res.render('profile', { user, titles, sharedArts })
})
router.all('*', (req, res) => {
    res.render('404');
})
module.exports = router;