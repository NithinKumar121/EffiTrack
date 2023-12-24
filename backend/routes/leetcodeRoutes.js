const express = require("express");
const router = express.Router();
const {getLcCount,getLcRating,postLcCount,postLcRating} = require('../controllers/leetcodeControllers');

router.route('/count').get(getLcCount).post(postLcCount);
router.route('/rating').get(getLcRating).post(postLcRating);
module.exports = router;