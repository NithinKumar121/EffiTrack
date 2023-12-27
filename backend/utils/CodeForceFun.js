var getForceCount = async (username) =>{
    var url = `https://codeforces.com/api/user.info?handles=${username}`;
    var data;
    await fetch(url,{
        method:"GET",
    })
    .then(Response=>Response.json())
    .then(d=>{
        data = d;
    })
    .catch(err=>console.log(err));
    return data;
}



const getForceRating = async (username)=>{
    var url = ` https://codeforces.com/api/user.rating?handle=${username}`;
    var data;
    await fetch(url,{
        method:"GET",
    })
    .then(Response=>Response.json())
    .then(d=>{
        data = d;
    })
    .catch(err=>console.log(err));
    return data;
}


module.exports = {
    getForceCount,getForceRating
}