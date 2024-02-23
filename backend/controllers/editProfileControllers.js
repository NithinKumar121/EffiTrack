const {userModel} = require("../models/userSchema");


const editImage = async (req,res) =>{
   try{
        const doc = await userModel.findOneAndUpdate(req.user,{profileImage:req.body},{
            new:true,
        })
        if(!doc){
            return res.status(404).json({error:true,message:'cant  able to set the profile photo'});
        }
        return res.status(200).json({error:false,message:'Successfully modified'});
   } catch(err){
        return res.status(400).json({error:true,message:err.message});
   }
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
        let query = {codechef:req.body.newUsername};
        const doc = await userModel.findOneAndUpdate(req.user,query,{
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
        let query = {github:req.body.newUsername};
        const doc = await userModel.findOneAndUpdate(req.user,query,{
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