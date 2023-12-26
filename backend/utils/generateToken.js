const jwt = require('jsonwebtoken');
const {userToken} = require('../models/userToken');

const generateTokens = async(user) =>{
    try{
        const payload = {username:user.username,email:user.email};
        console.log(payload);
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"4h"}
        )
        // const refreshToken = jwt.sign(
        //     payload,
        //     process.env.REFRESH_TOKEN_SECRET,
        //     {expiresIn:"4h"}
        // )
        // const userT = await userToken.findOne({username:user.username});
        // if(userT) await userT.remove();
        // const newToken = new userToken({username:user.username,token:accessToken});
        // newToken.save();
        return Promise.resolve({accessToken});
    }catch(err){
        return Promise.reject(err);
    }
}

module.exports = {generateTokens};