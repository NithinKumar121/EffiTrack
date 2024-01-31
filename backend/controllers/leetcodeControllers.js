const axios = require("axios");
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


const  getLeetcodeBatch = async (req,res) =>{
    const leetcode = req.user.leetcode;
    try{
        const response = await axios.get(`https://alfa-leetcode-api.vercel.app/All_1s_Well/badges`);
        if(response.data.badgesCount === 0){

            return res.status(202).json({error:true,message:"User doesn't have badges"})
            // 204 no content
        }
        return  res.status(200).json({error:false,message:response.data});
        // 200 success
    }   
    catch(err){
        return res.status(504).json({error:true,message:err.message});
        // 504 This error response is given when the server is acting as a gateway and cannot get a response in time.
    }
}


module.exports = {
    getLcCount,getLcRating,checkLcUsername , getLeetcodeBatch
}