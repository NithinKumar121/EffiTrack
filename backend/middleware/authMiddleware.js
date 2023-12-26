const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {userModel} = require('../models/userSchema');
const {verifyAuthRefreshToken} = require('../utils/verifyRefreshTokens');

const auth = async(req, res, next)=>{
    let token;
    console.log('incoming')
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            
            token = req.headers.authorization.split(' ')[1];
            
            const decode = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
            if(!decode){
                return res
                    .status(400)
                    .json({error:true,message:"Invalid Bearer token"})
            }

            req.user = await userModel.findOne({username:decode.username}).select('-password');

            next();
        }
        catch(err){
            return res.status(400).json({err:"Wrong token"})
        }
        if(!token){
            return res.status(401).json({msg:"Not Authorized , No token"});
        }
    }
    else{
        return res.status(401).json({msg:"Not Authorized , No token"});
    }
}


// const auth = async (req,res,next) =>{
//     let token;
//     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
//         try{
//             token = req.headers.authorization.split(' ')[1];
//             let username= "unknown";
//             // const validatedToken = verifyAuthRefreshToken(token);
//             validatedToken.then((result)=>{
//                 if(result.error){
//                     return res
//                           .status(400)
//                           .json({error:true,message:result.message});
//                 }
//                 const decodedDetails =  result.message;
//                 const payload = {username:decodedDetails.username};
//                 // const accessToken = jwt.sign(
//                 //     payload,
//                 //     process.env.ACCESS_TOKEN_SECRET,
//                 //     {expiresIn:'14m'}
//                 // );
//                 username = decodedDetails.username;
//                 email = decodedDetails.email;
//                 const resulted = userModel.findOne({username:username}).select('-password').exec();
//                 resulted.then((result)=>{
//                     if(!result){
//                         return res
//                                 .status(400)
//                                 .json({error:true,message:"User does not exist"});
//                     }

//                     req.user = result;
//                     // req.body = {accessToken:accessToken,refreshToken:token};
//                     next();
//                 })
//             });
            
           
//         }
//         catch(err){
//             return res.status(400).json({err:"Wrong token"})
//         }
//     }
// }

module.exports = {auth};