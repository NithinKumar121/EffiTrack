const express = require('express');
const router = express.Router();

const {getRepoDetails,postRepoDetails} = require('../controllers/githubControllers');

router.route('/repo').get(getRepoDetails).post(postRepoDetails);

module.exports = router;
