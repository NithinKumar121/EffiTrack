const express = require('express');
const router = express.Router();

const {getRepoDetails,postRepoDetails,checkUsername,githubProfile} = require('../controllers/githubControllers');
const {auth} = require('../middleware/authMiddleware')


router.route('/profile').get(auth,githubProfile);
router.route('/repo').get(auth,getRepoDetails).post(postRepoDetails);
router.route('/exist').post(auth,checkUsername)
module.exports = router;
