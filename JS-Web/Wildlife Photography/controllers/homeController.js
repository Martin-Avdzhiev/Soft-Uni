const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const User = require('../models/User');
const Post = require('../models/Post');
router.get('/', (req, res) => {
    if (req.query) {
        if (req.query.error) {
            res.render('home', { message: req.query.error });
        }
        else {
            res.render('home');
        }
    }
    else {
        res.render('home');
    }
})

router.get('/create', isAuth, async (req, res) => {
    res.render('create');
})

router.post('/create', isAuth, async (req, res) => {
    try {
        const data = req.body;
        data.author = req.user._id;
        const post = await Post.create(data);
        const user = await User.findById(req.user._id);
        if(!user.myPost){
            user.myPost = [];
        }
        user.myPost.push(post._id.toString());
        await User.findByIdAndUpdate(req.user._id, user);
        res.redirect('/posts');
    } catch (error) {
        res.render('create', { message: error.message });
    }

})


router.get('/posts', async (req, res) => {
    const posts = await Post.find().lean();
    res.render('all-posts', { posts });
})

router.get('/posts/:id/details', async (req, res) => {
    const post = await Post.findById(req.params.id).lean();
    const user = await User.findById(req.user?._id).lean();
    let owner = false;
    let isVoted = false;
    let voters = [];
    if (req.user) {
        owner = post.author.toString() == user._id.toString();
        for(const id of post.votes){
            if(id.toString() == req.user._id.toString()){
                isVoted = true;
            }
        }
    }
    for(let voterId of post.votes){
        voterId = voterId.toString()
        const voter = await User.findById(voterId).lean();
        voters.push(voter.email);
    }
    voters = voters.join(', ');
    res.render('details', { post, user, owner, isVoted, voters })
})

router.get('/posts/:id/edit', isAuth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).lean();
        const user = await User.findById(post.author).lean();
        const owner = post.author.toString() == user._id.toString();
        if(!owner){
            throw new Error('Only owner can edit or delete!');
        }
        res.render('edit', {post});
    } catch (error) {
        const message = error.message;
        console.log(message)
        res.redirect('/?error=' + encodeURIComponent(message));
    }

})

router.post('/posts/:id/edit', isAuth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).lean();
        const user = await User.findById(post.author).lean();
        const owner = post.author.toString() == user._id.toString();
        const data = req.body;
        if(!owner){
            throw new Error('Only owner can edit or delete!');
        }
        await Post.findByIdAndUpdate(req.params.id, data, {runValidators: true});
        res.redirect(`/posts/${req.params.id}/details`)
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.get('/posts/:id/delete', isAuth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).lean();
        const user = await User.findById(post.author).lean();
        const owner = post.author.toString() == user._id.toString();
        if(!owner){
            throw new Error('Only owner can edit or delete!');
        }
        await Post.findByIdAndDelete(req.params.id);
        res.redirect('/posts')
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.get('/posts/:id/upvote',isAuth, async(req, res)=> {
    try {
        const post = await Post.findById(req.params.id);
        for(const id of post.votes){
            if(id.toString() == req.user._id.toString()){
                throw new Error('You already voted!')
            }
        }
        post.rating++;
        post.votes.push(req.user._id.toString());
        await Post.findByIdAndUpdate(req.params.id, post);
        if(!post.votes){
            post.votes = [];
        }
        res.redirect(`/posts/${req.params.id}/details`);
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }

})

router.get('/posts/:id/downvote',isAuth, async(req, res)=> {
    try {
        const post = await Post.findById(req.params.id);
        for(const id of post.votes){
            if(id.toString() == req.user._id.toString()){
                throw new Error('You already voted!')
            }
        }
        post.rating--;
        post.votes.push(req.user._id.toString());
        await Post.findByIdAndUpdate(req.params.id, post);
        if(!post.votes){
            post.votes = [];
        }
        res.redirect(`/posts/${req.params.id}/details`);
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.get('/ownPosts', isAuth, async (req, res)=> {
    const user = await User.findById(req.user._id);
    const ownPosts = await Post.find({author: user._id}).lean();
    for(const post of ownPosts){
        post.firstName = user.firstName;
        post.lastName = user.lastName;
    }
    res.render('my-posts', { ownPosts });
})
router.all('*', (req, res) => {
    res.render('404');
})
module.exports = router;