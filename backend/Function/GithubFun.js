const getGithubRepo = async (username) =>{
    var url = `https://api.github.com/users/${username}/repos`
    const response = await fetch(url,{
        method: 'GET',
    })
    const data =  await response.json();
    var git_repo_details = [];
    data.forEach((d)=>{
        git_repo_details.push({name:d.name,url:d.html_url,desc:d.description,ano_url:d.url});
        // console.log(d.name,"\n");
        // console.log(d.html_url,"\n");
        // console.log(d.description,"\n");
        // console.log(d.url,"\n\n");
    })
    return git_repo_details;
}



module.exports = {
    getGithubRepo
}