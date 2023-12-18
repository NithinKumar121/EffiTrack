const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userSchema');

const auth =async (req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            
            token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
            const username = decode.username;
            req.user = await userModel.findOne({username}).select('-password');
            next();
        }
        catch(err){
            return res.status(400).json({err:"Wrong token"})
        }
        if(!token){
            return res.status(401).json({msg:"Not Authorized , No token"});
        }
    }
    next();
}

module.exports ={auth};