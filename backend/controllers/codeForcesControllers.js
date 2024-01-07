const {getForceCount,getForceRating}  = require("../utils/CodeForceFun");

const getCFcount = async (req,res) =>{
    const response = await getForceCount("Muthuval_A");
    console.log("data has been retrived",response);
    try{
        res.status(200).json({data:response});
    } catch (err){
        res.status(500).json({Error:"data haven't fetch by the code forece api"})
    }
    
}

const getCFrating = async (req,res) =>{
    const response = await getForceRating("Muthuvel_A");
    try{
        res.status(200).json({error:false,message:response.result});
    } catch{
        res.status(500).json({Error:"data haven't fetch by the code forece api"});
    }
}

const postCFcount = async (req,res) =>{
    const username  = req.body.username;
    try{
        const submitStats = await getForceCount(username);
        res.status(200).json({data:submitStats});
    }catch(err){
        res.status(500).json({Error:"Error occurred while fetching the data from the leetcode api"})
    }
}


const postCFrating = async (req,res) =>{
    const username  = req.body.username;
    try{
        const submitStats = await getForceRating(username);
        res.status(200).json({data:submitStats});
    }catch(err){
        res.status(500).json({Error:"Error occurred while fetching the data from the leetcode api"})
    }
}


module.exports = {
    getCFcount,getCFrating,postCFcount,postCFrating
}