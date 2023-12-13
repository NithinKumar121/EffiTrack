const express = require("express");
const router = express.Router();
const {getCFcount,getCFrating} = require("../controllers/codeForcesControllers");

router.route('/count').get(getCFcount);
router.route('/rating').get(getCFrating);

module.exports = router;