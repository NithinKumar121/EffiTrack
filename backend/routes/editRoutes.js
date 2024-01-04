const express = require('express');
const router = express.Router();
const fetchContestData = require('../controllers/futureContestController');
const {auth} = require("../middleware/authMiddleware");
const { editImage, 
        editLeetcodeUsername, 
        editCodeforceUsername, 
        editCodechefUsername, 
        editGithubUsername} = require('../controllers/editProfileControllers');

router.route('/profileImage',auth,editImage);
router.route('/leetcode',auth,editLeetcodeUsername);
router.route('/codefroce',auth,editCodeforceUsername);
router.route('/codechef',auth,editCodechefUsername);
router.route('/github',auth,editGithubUsername);

module.exports= router;