const router = require('express').Router();
const User = require('../models/User');
const Trip = require('../models/Trip');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    if(req.query.error){
        res.render('home', { message: req.query.error });
    }
    else{
        res.render('home');
    }
})

router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId).lean();
    const trips = await Trip.find({creator: user._id}).lean();
    const length = trips.length;
    console.log(trips)
    if (user.gender == 'male') {
        const male = 'male';
        res.render('profile', { male, trips, length })
    }
    else {
        res.render('profile', { trips, length })
    }
})

router.get('/offer', isAuth, (req, res) => {
    res.render('trip-create');
})

router.post('/offer', isAuth, async (req, res) => {
    try {
        const data = req.body;
        const creator = req.user._id;
        data.creator = creator;
        await Trip.create(data);
        res.redirect('/')
    } catch (error) {
        const message = error.message
        res.render('trip-create', { message });
    }
})

router.get('/trips', async (req, res) => {
    const trips = await Trip.find().lean();
    res.render('shared-trips', { trips })
})

router.get('/trips/:id/details', async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id).lean();
        const driver = await User.findById(trip.creator).lean();
        let isOwner = false;
        let already = false;
        const users = []
        for (const userId of trip.buddies){
                const user = await User.findById(userId.userId).lean()
                users.push(user);
        }
        if (req.user) {
            isOwner = trip.creator.toString() == req.user._id.toString();
            const user = await User.findById(req.user._id).lean();
            for (const currentTrip of user.tripsHistory) {
                if(currentTrip.tripId.toString() == trip._id.toString()){
                    already = true;
                }
            }
        }
        let length = trip.seats - trip.buddies.length;
        let freeSpaces = true;
        if (length <= 0){
            length = 0;
            freeSpaces = false;
        }
        const driverEmail = driver.email;
        res.render('trip-details', { trip, driverEmail, isOwner, already, freeSpaces, length, users });
    } catch (error) {
        const message = error.message;
        console.log(message)
        const user = req.user;
        if(user){
            res.redirect('/');     
        }
        else{
            res.redirect('/login');
        }
    }

})

router.get('/trips/:id/edit', isAuth, async (req, res) => {
    try {
        const userId = req.user._id;
        const trip = await Trip.findById(req.params.id).lean();
        if (userId.toString() != trip.creator.toString()) {
            throw new Error('Only owner can edit or delete the trip!');
        }
        res.render('trip-edit', { trip });
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }

})

router.post('/trips/:id/edit', isAuth, async (req, res) => {
    try {
        const userId = req.user._id;
        const trip = await Trip.findById(req.params.id).lean();
        if (userId.toString() != trip.creator.toString()) {
            throw new Error('Only owner can edit or delete the trip!');
        }
        await Trip.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/trips/${req.params.id}/details`);
    } catch (error) {
        const message = error.message;
        req.session.error = message;
        res.redirect('/');
    }
})
router.get('/trips/:id/delete', isAuth, async (req, res) => {
    try {
        const userId = req.user._id;
        const trip = await Trip.findById(req.params.id).lean();
        if (userId.toString() != trip.creator.toString()) {
            throw new Error('Only owner can edit or delete the trip!');
        }
        await Trip.findByIdAndDelete(req.params.id);
        res.redirect(`/trips`);
    } catch (error) {
        const message = error.message;
        req.session.error = message;
        res.redirect('/');
    }
})

router.get('/trips/:id/join', isAuth, async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id).lean();
        if (!trip.buddies) {
            trip.buddies = [];
        }
        if (trip.buddies.length >= trip.seats) {
            throw new Error('No seats available!')
        }
        const user = await User.findById(req.user._id).lean();
        if (!user.tripsHistory) {
            user.tripsHistory = [];
        }
        if (trip.creator.toString() == req.user._id.toString()) {
            throw new Error('Owner of the trip cant join the trip!');
        }
        const userId = req.user._id;
        user.tripsHistory.push({tripId: trip._id});
        trip.buddies.push({userId: user._id});
        const tripId = req.params.id;
        await User.findByIdAndUpdate(userId, user);
        await Trip.findByIdAndUpdate(tripId, trip );
        res.redirect(`/trips/${trip._id}/details`)
    } catch (error) {
        const message = error.message;
        console.log(error)
        res.redirect('/');
    }

})
router.all('*', (req, res) => {
    res.render('404');
})
module.exports = router;