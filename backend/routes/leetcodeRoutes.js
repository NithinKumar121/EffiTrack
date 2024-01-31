const express = require("express");
const router = express.Router();
const {getLcCount,getLcRating,checkLcUsername,getLeetcodeBatch} = require('../controllers/leetcodeControllers');
const {auth}  = require('../middleware/authMiddleware')


router.route('/count').get(auth,getLcCount)
router.route('/rating').get(auth,getLcRating);
router.route('/exist').post(auth,checkLcUsername);
router.route('/batches').get(auth,getLeetcodeBatch);


module.exports = router;