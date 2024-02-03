const express = require('express');
const router = express.Router();

const {register,login,getMe,logout,editProfile,verifedUsername}  = require("../controllers/userControllers");
const fetchContestData = require('../controllers/futureContestController');
const {auth} = require("../middleware/authMiddleware");
const {authPublic} =require("../middleware/publicMiddleware");
router.post('/register',register);
router.post('/login',login);
router.route('/').get(auth,getMe).post(authPublic,getMe);

router.route('/upcoming').get(auth,fetchContestData).post(authPublic,fetchContestData);
router.route('/verifedUsername').post(auth,verifedUsername);

module.exports= router;

