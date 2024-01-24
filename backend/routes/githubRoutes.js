const express = require('express');
const router = express.Router();

const {getRepoDetails,checkUsername,githubProfile} = require('../controllers/githubControllers');
const {auth} = require('../middleware/authMiddleware')


router.route('/profile').get(auth,githubProfile);
router.route('/repo').get(auth,getRepoDetails)
router.route('/exist').post(auth,checkUsername)

module.exports = router;
