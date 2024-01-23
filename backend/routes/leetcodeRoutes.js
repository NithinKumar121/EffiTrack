const express = require("express");
const router = express.Router();
const {getLcCount,getLcRating,checkLcUsername} = require('../controllers/leetcodeControllers');
const {auth}  = require('../middleware/authMiddleware')
router.route('/count').get(auth,getLcCount)
router.route('/rating').get(auth,getLcRating);
router.route('/exist').post(auth,checkLcUsername);
module.exports = router;