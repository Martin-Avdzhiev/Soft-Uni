const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const Book = require('../models/Book');
const bookService = require('../services/bookService');
const authController = require('../controllers/authController');
router.get('/', (req, res) => {
    res.render('home');
})

router.get('/catalog', async (req, res) => {
    const books = await bookService.findAll().lean();
    res.render('catalog', { books })
})

router.get('/create', isAuth, (req, res) => {
    res.render('create')
})

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    const ownerId = req.user._id;
    await Book.create({ ...data, owner: ownerId });
    res.redirect('/catalog');
})

router.get('/books/:id', async (req, res)=> {
    try {
        const id = req.params.id;
        const book = await bookService.findOne(id).lean();
        const user = req.user;
        let isOwner = false;
        let isWished = false;
        if (user){
            isOwner = book.owner.toString() == user._id;
             for(const wish of book.wishingList){
                 if(wish.toString() == user._id){
                    isWished = true;
                 }
             }
        }
        
        res.render('details', { book, isOwner, isWished })
    } catch (error) {
        console.log(error.message)
    }

})

router.get('/books/:id/edit', isAuth, async (req, res)=> {
    const book = await bookService.findOne(req.params.id).lean();
    const user = req.user;
    const isOwner = user._id == book.owner.toString();
    if(!isOwner){
        return res.redirect(`/books/${req.params.id}`);
    }
    try {
        res.render('edit', book ) 
    } catch (error) {
        console.log(error.message);
    }

})

router.post('/books/:id/edit',isAuth, async (req, res) => {
    const book = await bookService.findOne(req.params.id).lean();
    const user = req.user;
    const isOwner = user._id == book.owner.toString();
    if(!isOwner){
        return res.redirect(`/books/${req.params.id}`);
    }
    const data = req.body;
    await Book.findByIdAndUpdate(req.params.id, data, { runValidators: true });
    res.redirect(`/books/${req.params.id}`);
})

router.get('/books/:id/delete',isAuth, async (req, res) => {
    const book = await bookService.findOne(req.params.id).lean();
    const user = req.user;
    const isOwner = user._id == book.owner.toString();
    if(!isOwner){
        return res.redirect(`/books/${req.params.id}`);
    }
    await Book.findByIdAndDelete(req.params.id);
    res.redirect(`/catalog`);
})

router.get('/profile', isAuth, async (req, res) => {
    const user = req.user;
    const books = await bookService.findAll().lean();
    const wishedBooks = books.filter(x => {
        for(const wish of x.wishingList){
            if(wish.toString() == user._id){
               return true;
            }
        }
    })
    res.render('profile', {user, wishedBooks})
})

router.get('/books/:id/wish', isAuth, async (req, res) => {
    try {
        const book = await bookService.findOne(req.params.id).lean();
        const user = req.user;
        const isOwner = user._id == book.owner.toString();
        if(isOwner){
            return res.redirect(`/books/${req.params.id}`);
        }
        for(const wish of book.wishingList){
            if(wish.toString() == user._id){
               return res.redirect(`/books/${req.params.id}`);
            }
        }
        book.wishingList.push(user._id);
        await Book.findByIdAndUpdate(req.params.id, book);
        res.redirect(`/books/${req.params.id}`);
    } catch (error) {
        console.log(error.message)   
    }

})
router.all('*', (req ,res)=> {
    res.render('404')
})
module.exports = router;