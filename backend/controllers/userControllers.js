const {userModel} = require("../models/userSchema");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {signupbodyValidation,loginbodyValidation} = require('../utils/validationSchema');
const {generateTokens} = require("../utils/generateToken");
const { userToken } = require("../models/userToken");

const register = async (req,res) =>{
    const {username,password,email,userid} = req.body;

    try{
        const {error} = signupbodyValidation(req.body);
        console.log(error);
        if(error)   
            return res.status(400).json({error:true,message:'user info is not valid'});
        const data = await userModel.findOne({
            $or: [
                { username: username },
                { email: email },
                {userid:userid},
              ],
        });
        if(data){
            return  res
                    .status(400)
                    .json({message:"User already registered"});
        }

        const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await userModel.create({
            username,email,password:hashedPassword,userid
        })

        if(user){
            return res
            .status(201).json({
                name:username,email:email,userid:userid
            })
        }else{  
            return res
                   .status(403).json({err:"Invalid user data"});
        }
        
    } catch(err){
        res.status(500).json({Error:err.message});
    }
    
}


const login = async  (req,res) =>{
    const {username,password} = req.body;
    try{
        const user = await userModel.findOne({username:username});
        console.log(user);
        if(!user){
            return res.status(404).json({err:true,message:"user not found"});
        }
        const verifiedPassword = await bcrypt.compare(password,user.password);
        console.log(verifiedPassword)
        if(!verifiedPassword){
            return res
            .status(400)
            .json({error:true,message:"Invalid email or password"});
        }
        const {accessToken,refreshToken} = await generateTokens(user);
        res.status(200).json({
            error:false,
            accessToken,
            refreshToken,
            message:"Logged In Successfully",
        })

    }catch(e){

        return res.status(502).json({error:true,message:"Interval server error"});

    }
}

const getMe = async(req,res) =>{
    const user = await req.user;
    const accessToken = await req.body;
    console.log(user);
    console.log(accessToken);
    res.status(200).json({error:false,message:"NO"})
}


// logout 
const logout = async(req,res) =>{
    const refreshToken = req.body.refreshToken;
    try{
        const token = await userToken.findOne({token:refreshToken});
        if(!userToken){
            return res
                    .status(200)
                    .json({error:false,message:"Logged out successfully"});
        }
        await userToken.deleteOne({token:refreshToken})
        console.log(token)
        res.status(200).json({error:false,message:"Logged out successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({error:true,message:"Interval Server Error"})
    }
}


module.exports = {
    register,login,getMe, logout
}





