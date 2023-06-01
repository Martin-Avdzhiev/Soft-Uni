const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const cryptoService = require('../services/cryptoService');
const Crypto = require('../models/Crypto');
router.get('/create', isAuth, (req, res) => {
    res.render('crypto/create');
});

router.post('/create', isAuth, async (req, res) => {
    const cryptoData = req.body;
    try {
        if (Number(cryptoData.price) <= 0) {
            throw new Error('Price must be a positive number!')
        }
        await cryptoService.create(req.user._id, cryptoData);
    } catch (error) {
        return res.status(400).render('crypto/create', { error })
    }

    res.redirect('/crypto/catalog');
});

router.get('/catalog', async (req, res) => {
    const crypto = await cryptoService.getAll().lean();
    res.render('crypto/catalog', { crypto });
});

router.get('/:cryptoId/details', async (req, res) => {
    const id = req.params.cryptoId;
    try {
        const crypto = await cryptoService.getOne(id).lean();
        const isOwner = crypto.owner == req.user._id; // req.user is empty object if the user is not logged in
        const isBought = crypto.buyers.filter(x => x == req.user._id);
        res.render('crypto/details', { crypto, isOwner, isBought });
    } catch (error) {
        res.render('home/404');
    }
});

router.get('/:cryptoId/buy', isAuth, async (req, res) => {
    const id = req.params.cryptoId;
    const crypto = await cryptoService.getOne(id).lean();
    const isOwner = crypto.owner == req.user._id;
    const isBought = crypto.buyers.filter(x => x == req.user._id);
    await cryptoService.buy(req.user._id, req.params.cryptoId, isOwner, isBought);

    res.redirect(`/crypto/${req.params.cryptoId}/details`);
});

router.get('/:cryptoId/edit', isAuth, async (req, res) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId).lean();
    const isOwner = crypto.owner == req.user._id;
    if (!isOwner) {
        return res.render('home/404');
    }
    const options = cryptoService.getOptions();
    const find = options.paymentMethods.filter(x => x.value == crypto.paymentMethod)[0];
    find.selected = true;
    res.render('crypto/edit', { crypto, options })
});

router.post('/:cryptoId/edit', isAuth, async (req, res) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId).lean();
    const isOwner = crypto.owner == req.user._id;
    const options = cryptoService.getOptions();
    if (isOwner) {
        const data = req.body;
        try {
            await Crypto.findOneAndUpdate(crypto._id, data, { runValidators: true });
            return res.redirect(`/crypto/${crypto._id}/details`);
        } catch (error) {
            return res.status(400).render(`crypto/edit`, { crypto, options, error });
        }
    }
    else {
        res.render('home/404');
    }

});
router.get('/:cryptoId/delete', isAuth, async (req, res) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId).lean();
    const isOwner = crypto.owner == req.user._id;
    if (isOwner) {
        try {
            await Crypto.findOneAndDelete(crypto._id);
            return res.redirect(`/crypto/catalog`);
        } catch (error) {
            return res.status(400).render(`/crypto/${crypto._id}/details`, { error });
        }
    }
    else {
        res.render('home/404');
    }
});

router.get('/search', isAuth, async (req, res) => {
    const { name, paymentMethod } = req.query;
    const crypto = await cryptoService.search(name, paymentMethod);
    res.render('crypto/search', { crypto });
})

module.exports = router;