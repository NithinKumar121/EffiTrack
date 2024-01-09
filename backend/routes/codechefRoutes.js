const express = require('express');
const router = express.Router();

const {auth} = require('../middleware/authMiddleware')
const {getCodeChefDetails} = require("../controllers/codechefControllers");

router.route("/details").get(auth,getCodeChefDetails);

module.exports = router;