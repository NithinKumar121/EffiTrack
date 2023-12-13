const express = require("express");
const router = express.Router();
const {getLcCount,getLcRating} = require('../controllers/leetcodeControllers');

router.route('/count').get(getLcCount);
router.route('/rating').get(getLcRating);

module.exports = router;