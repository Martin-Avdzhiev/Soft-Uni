const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../utils');

router.get('/profile/:username', authController.getProfileInfo);
router.put('/profile', authController.editProfileInfo);

module.exports = router