const express = require('express');
const router = express.Router();


const {getCodeChefDetails} = require("../controllers/codechefControllers");

router.route("/details").get(getCodeChefDetails);

module.exports = router;