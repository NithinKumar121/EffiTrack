const express = require("express");
const router = express.Router();
const {getCFcount,getCFrating} = require("../controllers/codeForcesControllers");
const {auth} = require('../middleware/authMiddleware');
router.route('/count').get(auth,getCFcount)
router.route('/rating').get(auth,getCFrating)

module.exports = router;