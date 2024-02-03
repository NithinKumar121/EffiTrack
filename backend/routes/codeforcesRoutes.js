const express = require("express");
const router = express.Router();
const {getC,Fcount,getCFrating,checkCfUsername, getCFcount} = require("../controllers/codeForcesControllers");
const {auth} = require('../middleware/authMiddleware');
const {authPublic} =require("../middleware/publicMiddleware");


router.route('/count').get(auth,getCFcount).post(authPublic,getCFcount)
router.route('/rating').get(auth,getCFrating).post(authPublic,getCFrating)
router.route('/exist').post(auth,checkCfUsername);
module.exports = router;