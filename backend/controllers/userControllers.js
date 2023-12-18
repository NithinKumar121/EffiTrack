const userModel = require("../models/userSchema");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = async (req,res) =>{
    const {username,password,email,userid} = req.body;
    if(!username || !email || !password || !userid){
        res.status(400).json({err:"please fill all the fields"})
    }
    try{
        const data = await userModel.findOne({
            $or: [
                { username: username },
                { email: email },
                {userid:userid},
              ],
        })
        if(data){
            res.status(400).json({message:"User already registered"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // create user

        const user = await userModel.create({
            username,email,password:hashedPassword,userid
        })

        if(user){
            res.status(200).json({
                name:username,email:email,userid:userid
            })
        }else{  
            res.status(403).json({err:"Invalid user data"});
        }
        
    } catch(err){
        res.status(500).json({Error:"error"});
    }
    
}


const login = async  (req,res) =>{
    const {username,password} = req.body;
    try{
        const user = await userModel.findOne({
            username
        })
        if(user && (await bcrypt.compare(password,user.password))){
            return res.json({
                userid:user.userid,
                name:user.username,
                email:user.email,
                token:generateAuthToken(user.username),
                status:"Successfully logged in"
            })
        }else{
            res.status(403).json({error:"username not found"});
        }


    }catch(e){
        res.status(502).json({error:"error"})
    }
    res.status(200).json('login user');
}

const generateAuthToken = (username) =>{
    return jwt.sign({username},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"7d"
    })
}


const getMe = (req,res) =>{
    const {username,email} = req.user;
    res.status(200).json({username:username,email:email});
}

module.exports = {
    register,login,getMe
}