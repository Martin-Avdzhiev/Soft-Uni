const router = require('express').Router();
const User = require('../models/User');
const photoService = require('../services/photoService');
const { isAuth } = require('../middlewares/authMiddleware');
const Photo = require('../models/Photo');
router.get('/', (req, res) => {
    res.render('home');
})

router.get('/catalog', async (req, res) => {
    const photos = await photoService.getAll().lean();
    const users = await User.find().lean();
    photos.map(photo => {
        currentOwner = users.filter(x => x._id.toString() == photo.owner.toString());
        photo.ownerDetails = currentOwner[0];
    });
    res.render('catalog', { photos })
})
router.get('/profile/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).lean();
        const photos = await photoService.getAll().lean();
        const userPhotos = photos.filter(x => x.owner == userId);
        const length = userPhotos.length;
        res.render('profile', { userPhotos, user, length })
    } catch (error) {
        console.log(error.message)
        res.render('404')
    }

});
router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId).lean();
    const photos = await photoService.getAll().lean();
    const userPhotos = photos.filter(x => x.owner == userId);
    const length = userPhotos.length;
    res.render('profile', { userPhotos, user, length })
});


router.get('/create', isAuth, (req, res) => {
    res.render('create');
})

router.post('/create', isAuth, async (req, res) => {
    const photoData = req.body;
    try {
        if (photoData.age.length <= 0 || photoData.age.length > 100) {
            throw new Error('Age must be between 1 and 100 characters!');
        }
        await photoService.create(req.user._id, photoData);
        res.redirect('/catalog')
    } catch (error) {
        console.log(error.message)
        return res.render('create', { error })
    }
});

router.get('/photos/:id', async (req, res) => {
    try {
        const photoId = req.params.id;
        const photo = await photoService.getOne(photoId).lean();
        const user = req.user;
        const owner = await User.findById(photo.owner).lean();
        let isOwner = false;
        const commentList = photo.commentList;
        if (commentList.length > 0) {
            commentList.map(async x => {
                const commentatorUser = await User.findById(x.commentator);
                x.commentator = commentatorUser.username;
            })
        }
        if (user) {
            isOwner = user._id == photo.owner;
        }
        res.render('details', { photo, user, isOwner, owner, commentList })
    } catch (error) {
        console.log(error.message)
        res.redirect('/404')
    }

});

router.get('/photos/:id/edit', isAuth, async (req, res) => {
    const id = req.params.id;
    const photo = await photoService.getOne(id).lean();
    if (req.user._id != photo.owner) {
        return res.render('404');
    }
    res.render('edit', { photo });
})

router.post('/photos/:id/edit', isAuth, async (req, res) => {
    const id = req.params.id;
    const photo = await photoService.getOne(id).lean();
    const user = req.user;
    if (!user) {
        return res.redirect('/404')
    }
    if (user._id != photo.owner.toString()) {
        return res.redirect('/404')
    }

    const data = req.body;

    await Photo.findByIdAndUpdate(id, data, { runValidators: true });
    res.redirect(`/photos/${photo._id}`);
})
router.get('/photos/:id/delete', isAuth, async (req, res) => {
    const id = req.params.id;
    const photo = await photoService.getOne(id).lean();
    if (req.user._id != photo.owner) {
        return res.render('404');
    }
    const data = req.body;
    await Photo.findByIdAndDelete(id);
    res.redirect('/catalog')
})

router.post('/photos/:id', isAuth, async (req, res) => {
    const comment = req.body.comment;
    const id = req.params.id;
    const photo = await Photo.findById(id).lean();
    const userId = req.user._id;
    photo.commentList.push({ comment, commentator: userId });
    await Photo.findByIdAndUpdate(id, photo);
    res.redirect(`/photos/${id}`);
})
module.exports = router;