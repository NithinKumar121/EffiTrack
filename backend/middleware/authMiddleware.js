const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {userModel} = require('../models/userSchema');
const {verifyAuthRefreshToken} = require('../utils/verifyRefreshTokens');

const auth = async (req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            let username= "unknown";
            const validatedToken = verifyAuthRefreshToken(token);
            validatedToken.then((result)=>{
                if(result.error){
                    return res
                          .status(400)
                          .json({error:true,message:result.message});
                }
                const decodedDetails =  result.message;
              
                const payload = {username:decodedDetails.username};
                const accessToken = jwt.sign(
                    payload,
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn:'14m'}
                );
                username = decodedDetails.username;
                const resulted = userModel.findOne({username:username}).select('-password').exec();
                resulted.then((result)=>{
                    if(!result){
                        return res
                                .status(400)
                                .json({error:true,message:"User does not exist"});
                    }

                    req.user = result;
                    req.body = {accessToken:accessToken,refreshToken:token};
                    next();
                })
            });
            
           
        }
        catch(err){
            return res.status(400).json({err:"Wrong token"})
        }
    }
}

module.exports = {auth};