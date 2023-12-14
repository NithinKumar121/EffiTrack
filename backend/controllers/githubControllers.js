const {getGithubRepo} = require("../Function/GithubFun");

const getRepoDetails = async  (req,res) =>{
    try{
        const response  =await  getGithubRepo("Cibiyanna26");
        res.status(200).json({data:response});
    }catch(err){
        res.status(500).json({Error:"Git occured while fetching the github data"});
    }
}


module.exports = {
    getRepoDetails
}