const {getForceCount,getForceRating}  = require("../Function/CodeForceFun");

const getCFcount = async (req,res) =>{
    const response = await getForceCount("Cibiyanna26");
    try{
        res.status(200).json({data:response});
    } catch (err){
        res.status(500).json({Error:"data haven't fetch by the code forece api"})
    }
    
}

const getCFrating = async (req,res) =>{
    const response = await getForceRating("Cibiyanna26");
    try{
        res.status(200).json({data:response});
    } catch{
        res.status(500).json({Error:"data haven't fetch by the code forece api"});
    }
}

module.exports = {
    getCFcount,getCFrating
}