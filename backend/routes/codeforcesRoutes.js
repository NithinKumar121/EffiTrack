const express = require("express");
const router = express.Router();
const {getCFcount,getCFrating,postCFcount,postCFrating} = require("../controllers/codeForcesControllers");

router.route('/count').get(getCFcount).post(postCFcount);
router.route('/rating').get(getCFrating).post(postCFrating);

module.exports = router;