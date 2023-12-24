const express = require('express');
const router = express.Router();

const {register,login,getMe,logout}  = require("../controllers/userControllers");
const {auth} = require("../middleware/authMiddleware");

router.post('/register',register);
router.post('/login',login);
router.post('/',auth,getMe);
router.delete('/',auth,logout);
module.exports= router;
