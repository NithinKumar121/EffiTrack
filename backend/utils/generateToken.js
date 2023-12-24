const jwt = require('jsonwebtoken');
const {userToken} = require('../models/userToken');

const generateTokens = async(user) =>{
    try{
        const payload = {username:user.username};
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"14m"}
        )
        const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:"30d"}
        )
        const userT = await userToken.findOne({username:user.username});
        if(userT) await userT.remove();
        const newToken = new userToken({username:user.username,token:refreshToken});
        newToken.save();
        return Promise.resolve({accessToken,refreshToken});
    }catch(err){
        return Promise.reject(err);
    }
}

module.exports = {generateTokens};