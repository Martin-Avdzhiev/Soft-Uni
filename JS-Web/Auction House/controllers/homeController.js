const router = require('express').Router();
const Auction = require('../models/Auction');
const User = require('../models/User');
const { isAuth } = require('../middlewares/authMiddleware');
router.get('/', (req, res) => {
    res.render('home');

})

router.get('/browse', async (req, res) => {
    try {
        const allitems = await Auction.find().lean();
        const items = allitems.filter(x => {
            if(!x.isClosed){
                return x
            }
        });
        res.render('browse', { items })
    } catch (error) {
        res.render('browse', { items, error })
    }

})

router.get('/publish', isAuth, async (req, res) => {
    try {
        res.render('publish');
    } catch (error) {
        res.render('publish', error)
    }
})
router.post('/publish', isAuth, async (req, res) => {
    try {
        const data = req.body;
        const userId = req.user._id;
        const user = await User.findById(userId)
        data.author = user._id;
        await Auction.create(data);
        res.redirect('/browse')
    } catch (error) {
        const message = error.message;
        console.log(message)
        res.render('/publish', error)
    }

})

router.get('/browse/:id/details', async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await Auction.findById(itemId).lean();
        const authorId = item.author;
        const author = await User.findById(authorId).lean();
        const userId = req.user._id;
        const bidder = await User.findById(item.bidderId).lean();
        let owner = false;
        let guest = true;
        let currentBidder = false;
        if (userId) {
            guest = false;
            if (authorId == userId) {
                owner = true;
            }
        }
        if (userId == item.bidderId) {
            currentBidder = true;
        }
        if (owner) {
            res.render('details-owner', { item, author, bidder });
        }
        else {
            res.render('details', { item, author, guest, currentBidder });
        }
    } catch (error) {
        res.render('browse', error);
    }

})

router.get('/browse/:id/edit', isAuth, async (req, res) => {
    if(req.params.id.toString() != req.user._id.toString()){
        return res.redirect('/');
    }
    const categoryOptions = [
        { value: 'vehicles', label: 'Vehicle', selected: false },
        { value: 'real estate', label: 'Real Estate', selected: false },
        { value: 'electronics', label: 'Electronics', selected: false },
        { value: 'furniture', label: 'Furniture', selected: false },
        { value: 'other', label: 'Other', selected: false }
    ]
    const itemId = req.params.id;
    const item = await Auction.findById(itemId).lean();
    for (const option of categoryOptions) {
        if (option.value == item.category) {
            option.selected = true;
        }
    }
    res.render('edit', { categoryOptions, item })
}

)

router.post('/browse/:id/edit', isAuth, async (req, res) => {
    try {
        const data = req.body;
        if(req.params.id.toString() != req.user._id.toString()){
            return res.redirect('/');
        }
        await Auction.findByIdAndUpdate(req.params.id, data, { runValidators: true });
        res.redirect(`/browse/${req.params.id}/details`)
    } catch (error) {
        const categoryOptions = [
            { value: 'vehicles', label: 'Vehicle', selected: false },
            { value: 'real estate', label: 'Real Estate', selected: false },
            { value: 'electronics', label: 'Electronics', selected: false },
            { value: 'furniture', label: 'Furniture', selected: false },
            { value: 'other', label: 'Other', selected: false }
        ]
        const itemId = req.params.id;
        const item = await Auction.findById(itemId).lean();
        for (const option of categoryOptions) {
            if (option.value == item.category) {
                option.selected = true;
            }
        }
        res.render('edit', { categoryOptions, item, error })
    }
})

router.get('/browse/:id/delete',isAuth, async (req, res) => {
        if(req.params.id.toString() != req.user._id.toString()){
            return res.redirect('/');
        }
    await Auction.findByIdAndDelete(req.params.id);
    res.redirect(`/browse`)
})

router.post('/browse/:id/bid', async (req, res) => {
    try {
        const item = await Auction.findById(req.params.id).lean();
        const price = req.body.price;
        if (Number(item.price) >= Number(price)) {
            throw new Error('The bid price must be higher than current price!')
        }
        const userId = req.user._id;
        if (userId == item.author) {
            throw new Error('You are the author of this auction, you cna bid on yourselfs!')
        }
        item.bidderId = userId;
        item.price = price;
        await Auction.findByIdAndUpdate(req.params.id, item, { runValidators: true });
        res.redirect(`/browse/${req.params.id}/details`)
    } catch (error) {
        const itemId = req.params.id;
        const item = await Auction.findById(itemId).lean();
        const authorId = item.author;
        const author = await User.findById(authorId).lean();
        const userId = req.user._id;
        let guest = true;
        let currentBidder = false;
        if (userId) {
            guest = false;
        }
        if (userId == item.bidderId) {
            currentBidder = true;
        }
        res.render('details', { item, author, guest, error, currentBidder });
    }
})


router.get('/browse/:id/close', isAuth, async (req, res) => {
    const item = await Auction.findById(req.params.id).lean();
    const user = await User.findById(req.user._id).lean();
    if (item.author.toString() != user._id.toString()) {
        return res.redirect('/404');
    }
    item.isClosed = true;
    if (!user.closedAuction) {
        user.closedAuction = [];
    }
    user.closedAuction.push(item);
    await Auction.findByIdAndUpdate(req.params.id, item);
    await User.findByIdAndUpdate(req.user._id, user);
    res.redirect('/closed')
})
router.get('/closed', isAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).lean();
        const closedAuctions = user.closedAuction;
        for(const auction of  closedAuctions){
            const id = auction.bidderId
            const currentBidder = await User.findById(id).lean();
            auction.lastBidder = currentBidder.firstName + ' ' + currentBidder.lastName;
        }
        res.render('closed-auctions', {closedAuctions})        
    } catch (error) {
        console.log(error)
    }

})
router.all('*', (req, res) => {
    res.render('404');
})
module.exports = router;