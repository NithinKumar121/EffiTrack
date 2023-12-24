const express = require('express');
const router = express.Router();

const {register,login,getMe,logout}  = require("../controllers/userControllers");
const fetchContestData = require('../controllers/futureContestController');
const {auth} = require("../middleware/authMiddleware");

router.post('/register',register);
router.post('/login',login);
router.post('/',auth,getMe);
router.delete('/',auth,logout);
router.route('/upcoming').get(fetchContestData);
module.exports= router;
