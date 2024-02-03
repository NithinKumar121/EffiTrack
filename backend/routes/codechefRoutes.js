const express = require('express');
const router = express.Router();

const {auth} = require('../middleware/authMiddleware')
const {getCodeChefDetails,checkCfUsername} = require("../controllers/codechefControllers");
const {authPublic} =require("../middleware/publicMiddleware");


router.route("/details").get(auth,getCodeChefDetails).post(authPublic,getCodeChefDetails);
router.route('/exist').post(auth,checkCfUsername);
module.exports = router;