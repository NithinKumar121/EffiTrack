const {userModel} = require("../models/userSchema");

const SocialMedia = async (req,res) =>{
    try{
        const {LinkedIn, Twitter, Reddit} = {...req.body}
        const doc = await userModel.findOneAndUpdate(req.user,{socialMedia:{
            linkedIn: LinkedIn,
            twitter: Twitter,
            reddit: Reddit
        }},{
            new:true,
        });
        if(!doc){
            return res.status(404).json({error:true,message:'Cant able to change the username'})
        }
        return res.status(200).json({error:false,message:'Successfully modified'});
        // The HTTP status code 204 No Content indicates that the server successfully processed the request, but there is no content to send in the response body. 
    } catch(err){
        return res.status(400).json({error:true,message:err.message})
    }
}

const SocialMediaInitial = async (req,res) =>{
    try{
        let query = req.user.username;
        const doc = await userModel.find(query);
        if(!doc){
            return res.status(404).json({error:true,message:'Cant able to change the username'})
        }
        console.log(doc)
        return res.status(200).json({error:false,message:'Successfully modified'});
        // The HTTP status code 204 No Content indicates that the server successfully processed the request, but there is no content to send in the response body. 
    } catch(err){
        return res.status(400).json({error:true,message:err.message})
    }
}

module.exports = {SocialMedia, SocialMediaInitial}