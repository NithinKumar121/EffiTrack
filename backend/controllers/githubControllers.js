const {getGithubRepo} = require("../utils/GithubFun");
const { getGithubContributions } = require('github-contributions-counter')


const getRepoDetails = async  (req,res) =>{
    try{
        const response  =await  getGithubRepo("Cibiyanna26");
        res.status(200).json({data:response});
    }catch(err){
        res.status(500).json({Error:"Git occured while fetching the github data"});
    }
}

const postRepoDetails = async  (req,res) =>{
    const username = req.body.username;
    try{
        const response  =await getGithubRepo(username);
        getGithubContributions({
            username: 'Cibiyanna26',
            token: process.env.GITHUB_TOKEN // secret
          }).then((r) => {
            console.log(r.data.data.user.contributionsCollection.contributionCalendar)
        })
        res.status(200).json({data:response});
    }catch(err){
        res.status(500).json({Error:"Git occured while fetching the github data"});
    }
}



module.exports = {
    getRepoDetails,postRepoDetails
}