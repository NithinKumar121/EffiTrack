const {getLeetCount , getLeetRating} = require('../utils/LeetcodeFun');


const getLcCount = async (req,res) =>{
    const username = req.user.leetcode;
    try{
        const submitStats = await getLeetCount(username);
        res.status(200).json({error:false,message:submitStats.message});
    }catch(err){
        res.status(500).json({error:true,message:"Error occurred while fetching the data from the leetcode api"})
    }
   
}


const getLcRating =async (req,res) =>{
    const username = req.user.leetcode;
    try{
        var submitStats =await getLeetRating(username);
        if(submitStats.error){
            return res.status(404).json({error:true,message:'Username not found or network problem'})
        }
        const attendContest = submitStats.message[1].filter((data)=>{
            return data.attended==true;
        })
        return res.status(200).json({error:false,message:attendContest});
    }
    catch(err){
        res.status(500).json({error:true,message:err.message});
    }
}


const checkLcUsername = async (req,res) =>{
    const username = req.body.username;
    try{
        const submitStats = await getLeetCount(username);
        if(submitStats.error){
            return res.status(404).json({error:true})
        }
        return res.status(200).json({error:false})
    }catch(err){
        return res.status(500).json({error:true,message:"Error occurred while fetching the data from the leetcode api"})
    }
}

module.exports = {
    getLcCount,getLcRating,checkLcUsername
}