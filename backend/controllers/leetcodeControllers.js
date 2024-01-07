const {getLeetCount , getLeetRating} = require('../utils/LeetcodeFun');


const getLcCount = async (req,res) =>{
    const username = req.user.leetcode;
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
    const username = req.user.leetcode;
    var submitStats =await getLeetRating(username);
    const attendContest = submitStats[1].filter((data)=>{
        return data.attended==true;
    })
    console.log(attendContest.length)
    res.status(200).json({error:false,message:attendContest});
}

const postLcRating = async (req,res) =>{
    const username = req.body.username;
    try{
        const submitStats = await getLeetRating(username);
        
        res.status(200).json({data:attendContest});
    }catch(err){
        res.status(500).json({Error:"Error occurred while fetching the data from the leetcode api"})
    }
}

module.exports = {
    getLcCount,getLcRating,postLcCount,postLcRating
}