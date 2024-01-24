const jwt = require('jsonwebtoken');
const {userToken} = require('../models/userToken');

const generateTokens = async(user) =>{
    try{
        const payload = {username:user.username,email:user.email};
        console.log(payload);
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"7d"}
        )
        return Promise.resolve({accessToken});
    }catch(err){
        return Promise.reject(err);
    }
}

module.exports = {generateTokens};