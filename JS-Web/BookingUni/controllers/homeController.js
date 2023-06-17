const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const Hotel = require('../models/Hotel');
const User = require('../models/User');
router.get('/', async (req, res) => {
    const hotels = await Hotel.find().lean()
    res.render('home', { hotels });

})


router.get('/create', isAuth, (req, res) => {
    res.render('create');
})

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    data.owner = req.user._id;
    const hotel = await Hotel.create(data);
    const user = await User.findById(req.user._id);
    if (!user.offeredHotels) {
        user.offeredHotels = [];
    }
    user.offeredHotels.push(hotel._id);
    await User.findByIdAndUpdate(user._id, user, { runValidators: true });
    res.redirect('/');
})

router.get('/:id/details', async (req, res) => {
    const user = await User.findById(req.user?._id).lean();
    const hotel = await Hotel.findById(req.params.id).lean();
    let owner = false;
    let isBooked = false;
    if (user) {
        owner = user._id.toString() == hotel.owner.toString();
        for (const id of hotel.bookedUsers) {
            if (id.toString() == user._id.toString()) {
                isBooked = true;
            }
        }
    }
    res.render('details', { hotel, owner, isBooked })
})

router.get('/:id/edit', isAuth, async (req, res) => {
    const user = await User.findById(req.user?._id).lean();
    const hotel = await Hotel.findById(req.params.id).lean();
    let owner = user._id.toString() == hotel.owner.toString();
    if (!owner) {
        return res.redirect('/');
    }
    res.render('edit', { hotel })
})

router.post('/:id/edit', isAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user?._id).lean();
        const hotel = await Hotel.findById(req.params.id).lean();
        let owner = user._id.toString() == hotel.owner.toString();
        if (!owner) {
            return res.redirect('/');
        }
        const data = req.body;
        await Hotel.findByIdAndUpdate(req.params.id, data, { runValidators: true });
        res.redirect(`/${req.params.id}/details`);
    } catch (error) {
        console.log(error.message);
        res.redirect(`/${req.params.id}/details`);
    }

})


router.get('/:id/delete', isAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user?._id).lean();
        const hotel = await Hotel.findById(req.params.id).lean();
        let owner = user._id.toString() == hotel.owner.toString();
        if (!owner) {
            return res.redirect('/');
        }
        const data = req.body;
        await Hotel.findByIdAndDelete(req.params.id);
        res.redirect('/')
    } catch (error) {
        console.log(error.message);
        res.redirect(`/${req.params.id}/details`);
    }

})


router.get('/:id/book', isAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user?._id).lean();
        const hotel = await Hotel.findById(req.params.id).lean();
        let owner = user._id.toString() == hotel.owner.toString();
        if (owner) {
            return res.redirect(`/${req.params.id}/details`);
        }
        if (!user.bookedHotels) {
            user.bookedHotels = [];
        }
        if (!hotel.bookedUsers) {
            hotel.bookedUsers = [];
        }
        for (const hotelId of user.bookedHotels) {
            if (hotelId.toString() == hotel._id.toString()) {
                return res.redirect(`/${req.params.id}/details`);
            }
        }
        user.bookedHotels.push(hotel._id);
        hotel.bookedUsers.push(user._id);
        await User.findByIdAndUpdate(user._id, user, { runValidators: true });
        await Hotel.findByIdAndUpdate(hotel._id, hotel, { runValidators: true });
        res.redirect(`/${req.params.id}/details`)
    } catch (error) {
        console.log(error.message);
        res.redirect(`/${req.params.id}/details`);
    }
})


router.get('/profile', isAuth, async (req, res) => {
    const user = await User.findById(req.user._id).lean();
    let bookedHotels = [];
    if (!user.bookedHotels) {
        user.bookedHotels = [];
    }
    for (const hotelId of user.bookedHotels) {
        const hotel = await Hotel.findById(hotelId).lean();
        bookedHotels.push(hotel.name);
    }
    bookedHotels = bookedHotels.join('; ');
    res.render('profile', { user, bookedHotels });
})
router.all('*', (req, res) => {
    res.redirect('/')
})
module.exports = router;