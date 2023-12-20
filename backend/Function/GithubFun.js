const { response } = require("express");

const getGithubRepo = async (username) =>{
    var url = `https://api.github.com/users/${username}/repos`
    const response = await fetch(url,{
        method: 'GET',
    })
    const data =  await response.json();
    var git_repo_details = [];
    data.forEach((d)=>{
        git_repo_details.push({name:d.name,url:d.html_url,desc:d.description,ano_url:d.url});
    
    })
    return git_repo_details;
}

const getCalender = async () =>{
    const url = 'https://ghchart.rshah.org/Cibiyanna26';
    await fetch(url,{
        method: 'GET',
    })
    .then(res => res.text())
    .then(res => {
        // const holder = document.createElement('div')
        // holder.innerHTML = res
        // console.log(holder.querySelector('path'))
        console.log(res);
    })
}




module.exports = {
    getGithubRepo,getCalender
}