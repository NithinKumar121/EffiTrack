const express = require('express');
const router = express.Router();

const {getRepoDetails} = require('../controllers/githubControllers');

router.route('/repo').get(getRepoDetails);

module.exports = router;
