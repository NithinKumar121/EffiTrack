const {getForceCount,getForceRating}  = require("../utils/CodeForceFun");

const getCFcount = async (req,res) =>{
    const username = req.user.codeforces;
    
    try{
        const response = await getForceCount(username);
        res.status(200).json({error:false,message:response});
    } catch (err){
        res.status(500).json({error:true,message:"data haven't fetch by the code forece api"})
    }
    
}

const getCFrating = async (req,res) =>{
    const response = await getForceRating("Muthuvel_A");
    try{
        res.status(200).json({error:false,message:response.result});
    } catch{
        res.status(500).json({error:true,message:"data haven't fetch by the code forece api"});
    }
}

const postCFcount = async (req,res) =>{
    const username  = req.body.username;
    try{
        const submitStats = await getForceCount(username);
        res.status(200).json({error:false,message:submitStats});
    }catch(err){
        res.status(500).json({error:true,message:"Error occurred while fetching the data from the leetcode api"})
    }
}


const postCFrating = async (req,res) =>{
    const username  = req.body.username;
    try{
        const submitStats = await getForceRating(username);
        res.status(200).json({error:false,message:submitStats});
    }catch(err){
        res.status(500).json({error:true,message:"Error occurred while fetching the data from the leetcode api"})
    }
}


module.exports = {
    getCFcount,getCFrating,postCFcount,postCFrating
}