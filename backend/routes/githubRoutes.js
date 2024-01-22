const express = require('express');
const router = express.Router();

const {getRepoDetails,postRepoDetails,checkUsername} = require('../controllers/githubControllers');
const {auth} = require('../middleware/authMiddleware')
router.route('/repo').get(getRepoDetails).post(postRepoDetails);
router.route('/exist').post(auth,checkUsername)
module.exports = router;
