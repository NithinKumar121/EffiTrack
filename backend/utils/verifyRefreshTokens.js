const {userToken} = require('../models/userToken');
const jwt = require('jsonwebtoken')


const verifyAuthRefreshToken = async  (refreshToken)=>{
    const privateKey  = process.env.REFRESH_TOKEN_SECRET;
    console.log('incoming');
    const token = await userToken.findOne({token:refreshToken});
    if(!token) 
            return {error:true,message:"Invalid refresh token"}
    const decode = await jwt.verify(refreshToken, privateKey);
    if(!decode){
        return {error:true,message:"Invalid refresh token"}
    }
    return {error:false,message:decode};
    // return new Promise((resolve, reject)=>{ 
    //          userToken.findOne({token:refreshToken},(err,doc)=>{
    //             if(!doc){
    //                 return reject({error:true,message:"Invalid refresh token"});
    //             }
    //             jwt.verify(refreshToken,privateKey,(err,tokenDetails)=>{
    //                 if(err){
    //                     return reject({error:true,message:"Invalid refresh token"});
    //                 }
    //                 console.log(tokenDetails)
    //                 resolve({
    //                     tokenDetails,
    //                     error:false,
    //                     message:"Valid refresh token",
    //                 })
    //             })
    //          })
    //         console.log(doc);
            
    //     })
}

module.exports = {verifyAuthRefreshToken};