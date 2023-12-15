const userModel = require("../models/userSchema");

const register = async (req,res) =>{
    const {username,password,email,userid} = req.body;

    try{
        await userModel.findOne({
            $or: [
                { username: username },
                { email: email },
                {userid:userid},
              ],
        })
        .then(data=>{
            if(!data){
                 var user = new userModel({
                    username,
                    password,
                    email,
                    userid,
                })
                user.save();
                res.status(200).json({data:user})
            }else{
                res.status(302).json({message:"user already registered"})
            }
        })
       
       
    } catch(err){
        res.status(500).json({Error:"error"});
    }
    
}


const login = async  (req,res) =>{
    const {username,password} = req.body;
    try{
        await userModel.findOne({
            username
        })
        .then((data)=>{
            if(data){
                if(data.password == password){
                    res.status(200).json({data:data});
                }else{
                    res.status(401).json({unAuthorized:"password is wrong"});
                }
                
            }else{
                res.status(404).json({error:"not found"});
            }
        })

    }catch(e){
        res.status(502).json({error:"error"})
    }
}

module.exports = {
    register,login
}