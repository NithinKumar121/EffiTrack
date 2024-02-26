const express = require('express');
const otpController = require('../controllers/otpControllers')
const router = express.Router();
const {auth} = require("../middleware/authMiddleware")

router.route('/send-otp').post( otpController.sendOTP);

module.exports = router;