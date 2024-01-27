const express = require("express");
const router = express.Router();
const {SocialMedia, SocialMediaInitial} = require('../controllers/socialMediaController')
const {auth}  = require('../middleware/authMiddleware')

router.route('/').post(auth,SocialMedia).get(auth,SocialMediaInitial)

module.exports = router;