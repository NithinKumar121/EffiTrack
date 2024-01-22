const express = require("express");
const router = express.Router();
const {getCFcount,getCFrating,checkCfUsername} = require("../controllers/codeForcesControllers");
const {auth} = require('../middleware/authMiddleware');
router.route('/count').get(auth,getCFcount)
router.route('/rating').get(auth,getCFrating)
router.route('/exist').post(auth,checkCfUsername);
module.exports = router;