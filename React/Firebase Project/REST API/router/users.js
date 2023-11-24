const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../utils');

router.put('/', authController.editProfileInfo);
router.get('/:id', authController.getProfileInfo);

module.exports = router