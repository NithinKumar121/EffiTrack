var getForceCount = async (username) =>{
    var url = `https://codeforces.com/api/user.info?handles=${username}`;
    await fetch(url,{
        method:"GET",
    })
    .then(Response=>Response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}



const getForceRating = async (username)=>{
    var url = ` https://codeforces.com/api/user.rating?handle=${username}`;
    await fetch(url,{
        method:"GET",
    })
    .then(Response=>Response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}


module.exports = [
    getForceCount,getForceRating
]