const {getLeetCount , getLeetRating} = require('../Function/LeetcodeFun');

const getLcCount = async (req,res) =>{
    const username = "arulcibi007";
    const submitStats = await getLeetCount(username);
    res.status(200).json({data:submitStats});
}

const getLcRating =async (req,res) =>{
    const username = "arulcibi007";
    var submitStats =await getLeetRating(username);
    res.send(submitStats);
}

module.exports = {
    getLcCount,getLcRating
}