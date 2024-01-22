const express = require("express");
const router = express.Router();
const {getLcCount,getLcRating,postLcCount,postLcRating,checkLcUsername} = require('../controllers/leetcodeControllers');
const {auth}  = require('../middleware/authMiddleware')
router.route('/count').get(auth,getLcCount).post(postLcCount);
router.route('/rating').get(auth,getLcRating).post(postLcRating);
router.route('/exist').post(auth,checkLcUsername);
module.exports = router;