const express = require('express');
const router = express.Router();

const {auth} = require('../middleware/authMiddleware')
const {getCodeChefDetails,checkCfUsername} = require("../controllers/codechefControllers");

router.route("/details").get(auth,getCodeChefDetails);
router.route('/exist').post(auth,checkCfUsername);
module.exports = router;