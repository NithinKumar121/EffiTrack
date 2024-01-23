const {getGithubRepo} = require("../utils/GithubFun");
const { getGithubContributions } = require('github-contributions-counter')


const getRepoDetails = async  (req,res) =>{
    const username = req.user.github;
    try{
        const response  =await  getGithubRepo(username);
        res.status(200).json({error:false,message:response});
    }catch(err){
        res.status(500).json({error:true,message:err.message});
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

const checkUsername = async(req,res) =>{
    const username = req.body.username;
    console.log("github username entered",username)
    url = `https://api.github.com/users/${username}`
    try{
        const response = await fetch(url,{
            method: 'GET',
        })
        const data =await response.json();
        if (data.hasOwnProperty('message') && data.message == 'Not Found') {
           return res.status(404).json({error:true,message:'Username not found'});
        } else {
            return res.status(200).json({error:false,message:data});
        }

    } catch(err){
        return res.status(500).json({error:true,message:err.message})
    }
}

const githubProfile= async (req,res)=>{
    const username = req.user.username;
    url = `https://api.github.com/users/${username}`
    try{
        const response = await fetch(url,{
            method: 'GET',
        })
        const data =await response.json();
        if (data.hasOwnProperty('message') && data.message == 'Not Found') {
           return res.status(404).json({error:true,message:'Username not found'});
        } else {
            return res.status(200).json({error:false,message:data});
        }

    } catch(err){
        return res.status(500).json({error:true,message:err.message})
    }
}


module.exports = {
    getRepoDetails,postRepoDetails,checkUsername,githubProfile
}