const {getChefData} = require('../Function/CodeChefFun');

const getCodeChefDetails =async (req,res)=>{
    try{
        const response = await getChefData("cibiyanna_p");
        res.status(200).json({data:response});
    }
    catch(err){
        res.status(404).json({Error:"Username name is not valid"});
    }
}

module.exports = {
    getCodeChefDetails
}
