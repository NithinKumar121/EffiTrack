const {getGithubRepo} = require("../Function/GithubFun");

const getRepoDetails = async  (req,res) =>{
    const response  =await  getGithubRepo("Cibiyanna26");
    res.send(response);
}


module.exports = {
    getRepoDetails
}