const express = require("express");
const router = express.Router();
const {getCFcount,getCFrating,postCFcount,postCFrating} = require("../controllers/codeForcesControllers");
const {auth} = require('../middleware/authMiddleware');
router.route('/count').get(getCFcount).post(postCFcount);
router.route('/rating').get(auth,getCFrating).post(postCFrating);

module.exports = router;