const express = require('express')
const authController = require('./../Backend Bootcamp/authController')
const router = express.router();

router.route('/').post('/signup', authController.signup)
module.exports = router;