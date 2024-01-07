const express = require("express");
const router = express.Router();
const {getLcCount,getLcRating,postLcCount,postLcRating} = require('../controllers/leetcodeControllers');
const {auth}  = require('../middleware/authMiddleware')
router.route('/count').get(getLcCount).post(postLcCount);
router.route('/rating').get(auth,getLcRating).post(postLcRating);
module.exports = router;