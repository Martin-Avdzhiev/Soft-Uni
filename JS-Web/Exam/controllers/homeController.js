const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const User = require('../models/User');
const Animal = require('../models/Animal');
router.get('/', async (req, res) => {
    try {
        const animals = await Animal.find().lean();
        let lastThreeAnimals = [];
        if(animals){
         lastThreeAnimals = animals.splice(-3);
        }
        if (req.query) {
            if (req.query.error) {
                res.render('home', { message: req.query.error, lastThreeAnimals });
            }
            else {
                res.render('home', { lastThreeAnimals });
            }
        }
        else {
            res.render('home', { lastThreeAnimals });
        }
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.get('/create', isAuth, (req, res) => {
    res.render('create')
})

router.post('/create', isAuth, async (req, res) => {
    try {
        const data = req.body;
        data.owner = req.user._id
        const animal = await Animal.create(data);
        res.redirect('/dashboard');
    } catch (error) {
        const message = error.message;
        res.render('create', { message })
    }

})

router.get('/dashboard', async (req, res) => {
    try {
        const animals = await Animal.find().lean();
        res.render('dashboard', { animals })
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.get('/:id/details', async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id).lean();
        const isOwner = req.user?._id.toString() == animal.owner.toString();
        let isDonated = false;
        if (!animal.donations) {
            animal.donations = [];
        }
        if (req.user) {
            for (const userId of animal.donations) {
                for (const userId of animal.donations) {
                    if (req.user._id.toString() == userId.toString()) {
                        isDonated = true;
                    }
                }
            }
        }

        res.render('details', { animal, isOwner, isDonated })
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }

})

router.get('/:id/edit', isAuth, async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id).lean();
        const isOwner = req.user._id.toString() == animal.owner.toString();
        if (!isOwner) {
            throw new Error('Only owner can edit or delte animal!')
        }
        res.render('edit', { animal });
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.post('/:id/edit', isAuth, async (req, res) => {
    const animal = await Animal.findById(req.params.id).lean()
    try {
        const data = req.body;
        const isOwner = req.user._id.toString() == animal.owner.toString();
        if (!isOwner) {
            throw new Error('Only owner can edit or delte animal!')
        }
        await Animal.findByIdAndUpdate(req.params.id, data, { runValidators: true })
        res.redirect(`/${req.params.id}/details`);
    } catch (error) {
        const message = error.message;
        res.render('edit', { message, animal })
    }
})

router.get('/:id/delete', isAuth, async (req, res) => {
    const animal = await Animal.findById(req.params.id).lean()
    try {
        const isOwner = req.user._id.toString() == animal.owner.toString();
        if (!isOwner) {
            throw new Error('Only owner can edit or delte animal!')
        }
        await Animal.findByIdAndDelete(req.params.id)
        res.redirect('/dashboard');
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.get('/:id/donation', isAuth, async (req, res) => {
    const animal = await Animal.findById(req.params.id).lean();
    try {
        if (!animal.donations) {
            animal.donations = [];
        }
        for (const userId of animal.donations) {
            if (req.user._id.toString() == userId.toString()) {
                throw new Error('You already donated!');
            }
        }
        const isOwner = req.user._id.toString() == animal.owner.toString();
        if (isOwner) {
            throw new Error('You are the owner of this animal, you cant donate to yourself');
        }
        animal.donations.push(req.user._id.toString());
        await Animal.findByIdAndUpdate(req.params.id, animal, { runValidators: true });
        res.redirect(`/${req.params.id}/details`);
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.get('/search', (req, res) => {
    res.render('search')
})

router.post('/search', async (req, res) => {
    try {
        const location = req.body.location.toLowerCase();
        const animals = await Animal.find().lean();
        const matchedAnimals = [];
        for (const animal of animals) {
            const animalLocation = animal.location.toLowerCase();
            if (animalLocation.includes(location)) {
                matchedAnimals.push(animal);
            }
        }
        res.render('search', { matchedAnimals })
    } catch (error) {
        const message = error.message;
        res.render('search', { message });
    }

})

router.all('*', (req, res) => {
    res.render('404');
})

module.exports = router;