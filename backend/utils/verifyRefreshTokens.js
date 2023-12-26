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
}

module.exports = {verifyAuthRefreshToken};