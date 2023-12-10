const getGithubRepo = async (username) =>{
    var url = `https://api.github.com/users/${username}/repos`
    const response = await fetch(url,{
        method: 'GET',
    })

    data.forEach((d)=>{
        console.log(d.name,"\n");
        console.log(d.html_url,"\n");
        console.log(d.description,"\n");
        console.log(d.url,"\n\n");
    })
}


getGithubRepo("Cibiyanna26");

module.exports = [
    getGithubRepo
]