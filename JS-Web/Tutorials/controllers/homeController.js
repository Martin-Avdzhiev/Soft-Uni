const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const User = require('../models/User');
const Course = require('../models/Course');
router.get('/', async (req, res) => {
    let courses = await Course.find().lean();
    let searchCourses = [];
    if (req.query.search) {
        for (const course of courses) {
            if (course.title.toString().toLowerCase().includes(req.query.search.toString().toLowerCase())) {
                searchCourses.push(course);
            }
        }
        courses = searchCourses;
    }
    courses.sort((a, b) => a.timestamp - b.timestamp);
    if (!req.user) {
        for (const course of courses) {
            if (course.enrolledUsers) {
                course.enrolls = course.enrolledUsers.length;
            }
            else {
                course.enrolls = 0
            }
        }
        courses.sort((a, b) => b.enrolls - a.enrolls);
        courses.splice(3);
        if (req.query) {
            if (req.query.error) {
                res.render('guest-home', { message: req.query.error, courses, searchCourses })
            }
            else {
                res.render('guest-home', { courses, searchCourses })
            }
        }
        else {
            res.render('guest-home', { courses, searchCourses })
        }
    }
    else {
        if (req.query) {
            if (req.query.error) {
                res.render('home', { message: req.query.error, courses, searchCourses });
            }
            else {
                res.render('home', { courses, searchCourses });
            }
        }
        else {
            res.render('home', { courses, searchCourses });
        }
    }
})


router.get('/create', isAuth, async (req, res) => {
    res.render('create')
})

router.post('/create', isAuth, async (req, res) => {
    try {
        const data = req.body;
        const timestamp = new Date();
        data.timestamp = timestamp;
        data.author = req.user._id;
        const course = await Course.create(data);
        res.redirect('/');
    } catch (error) {
        const message = error.message;
        console.log(message);
        res.render('create', { message });
    }
})

router.get('/:id/details', isAuth, async (req, res) => {
    const course = await Course.findById(req.params.id).lean();
    const isOwner = course.author.toString() == req.user?._id;
    let isEnroll = false;
    if (!course.enrolledUsers) {
        course.enrolledUsers = [];
    }
    if (req.user) {
        for (const userId of course.enrolledUsers) {
            if (userId.toString() == req.user._id.toString()) {
                isEnroll = true;
            }
        }
    }
    res.render('details', { course, isOwner, isEnroll })
})

router.get('/:id/edit', isAuth, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).lean();
        const owner = course.author.toString() == req.user._id.toString();
        if (!owner) {
            throw new Error('Only owner can edit or delete!')
        }
        res.render('edit', { course })
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }

})

router.post('/:id/edit', isAuth, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).lean();
        const data = req.body;
        const timestamp = course.timestamp;
        data.timestamp = timestamp;
        const owner = course.author.toString() == req.user._id.toString();
        if (!owner) {
            throw new Error('Only owner can edit or delete!')
        }
        await Course.findByIdAndUpdate(req.params.id, data, { runValidators: true });
        res.redirect(`/${req.params.id}/details`);
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.get('/:id/delete', isAuth, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).lean();
        const owner = course.author.toString() == req.user._id.toString();
        if (!owner) {
            throw new Error('Only owner can edit or delete!')
        }
        await Course.findByIdAndDelete(req.params.id);
        res.redirect(`/`);
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.get('/:id/enroll', isAuth, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).lean();
        const user = await User.findById(req.user._id).lean();
        if (!user.enrolledCourses) {
            user.enrolledCourses = [];
        }
        if (user.enrolledCourses.length > 0) {
            for (const courseId of user.enrolledCourses) {
                if (courseId.toString() == course._id.toString()) {
                    throw new Error('You already enrolled for this course!')
                }
            }
        }
        course.enrolledUsers.push(user._id);
        user.enrolledCourses.push(course._id);
        await Course.findByIdAndUpdate(req.params.id, course, { runValidators: true });
        await User.findByIdAndUpdate(user._id, user, { runValidators: true });
        res.redirect(`/${req.params.id}/details`);
    } catch (error) {
        const message = error.message;
        res.redirect('/?error=' + encodeURIComponent(message));
    }
})

router.all('*', (req, res) => {
    res.render('home');
})

module.exports = router;