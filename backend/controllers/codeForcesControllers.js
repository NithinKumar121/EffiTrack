const {getForceCount,getForceRating}  = require("../Function/CodeForceFun");

const getCFcount = async (req,res) =>{
    const response = await getForceCount("Cibiyanna26");
    res.send(response);
}

const getCFrating = async (req,res) =>{
    const response = await getForceRating("Cibiyanna26");
    res.send(response);
}

module.exports = {
    getCFcount,getCFrating
}