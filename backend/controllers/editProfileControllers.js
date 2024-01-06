const {userModel} = require("../models/userSchema");


const editImage = (req,res) =>{
   
}

const editLeetcodeUsername = async (req,res) =>{
    try{
        const doc = await userModel.findOneAndUpdate(req.user,{leetcode:req.body.newUsername},{
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

const editCodeforceUsername = async (req,res) =>{
    try{
        const doc = await userModel.findOneAndUpdate(req.user,{codeforces:req.body.newUsername},{
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

const editCodechefUsername = async (req,res) =>{
    try{
        const doc = await userModel.findOneAndUpdate(req.user,{codechef:req.body.newUsername},{
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

const editGithubUsername = async (req,res)=>{
    try{
        const doc = await userModel.findOneAndUpdate(req.user,{github:req.body.newUsername},{
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


module.exports = {
    editImage,editLeetcodeUsername,editCodeforceUsername,editCodechefUsername,editGithubUsername
}