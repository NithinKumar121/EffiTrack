const express = require('express');
const router = express.Router();

const {register,login,getMe,logout,editProfile,verifedUsername}  = require("../controllers/userControllers");
const fetchContestData = require('../controllers/futureContestController');
const {auth} = require("../middleware/authMiddleware");

router.post('/register',register);
router.post('/login',login);
router.get('/',auth,getMe);
router.route('/upcoming').get(auth,fetchContestData);
router.route('/verifedUsername').post(auth,verifedUsername);

module.exports= router;

