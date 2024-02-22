const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {userModel} = require('../models/userSchema');
const {verifyAuthRefreshToken} = require('../utils/verifyRefreshTokens');

const authPublic = async(req, res, next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            let query = {username:req.body.username};
            token = req.headers.authorization.split(' ')[1];
            
            const decode = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
            if(!decode){
                return res
                    .status(400)
                    .json({error:true,message:"Invalid Bearer token"})
            }

            req.user = await userModel.findOne(query).select('-password -created -_id -__v');
            if(!req.user){
                return res.status(404).json({error:true,message:"Invalid username"})
            }
            next();
        }
        catch(err){
            return res.status(400).json({error:true,message:"Wrong token"})
        }
        if(!token){
            return res.status(401).json({error:true,message:"Not Authorized , No token"});
        }
    }
    else{
        return res.status(401).json({error:true,message:"Not Authorized , No token"});
    }
}


module.exports = {authPublic};