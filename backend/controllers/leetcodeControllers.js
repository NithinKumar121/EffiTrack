const {getLeetCount , getLeetRating} = require('../Function/LeetcodeFun');

const getLcCount = async (req,res) =>{
    const username = "arulcibi007";
    try{
        const submitStats = await getLeetCount(username);
        res.status(200).json({data:submitStats});
    }catch(err){
        res.status(500).json({Error:"Error occurred while fetching the data from the leetcode api"})
    }
   
}

const postLcCount = async (req,res) =>{
    const username  = req.body.username;
    try{
        const submitStats = await getLeetCount(username);
       
        res.status(200).json({data:submitStats});
    }catch(err){
        res.status(500).json({Error:"Error occurred while fetching the data from the leetcode api"})
    }
}

const getLcRating =async (req,res) =>{
    const username = "arulcibi007";
    var submitStats =await getLeetRating(username);
    res.send(submitStats);
}

const postLcRating = async (req,res) =>{
    const username = req.body.username;
    try{
        const submitStats = await getLeetRating(username);
        res.status(200).json({data:submitStats});
    }catch(err){
        res.status(500).json({Error:"Error occurred while fetching the data from the leetcode api"})
    }
}

module.exports = {
    getLcCount,getLcRating,postLcCount,postLcRating
}