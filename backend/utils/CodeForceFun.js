var getForceCount = async (username) => {
    var url = `https://codeforces.com/api/user.info?handles=${username}`;
    
    try {
        const response = await fetch(url, {
            method: "GET",
        });

        const data = await response.json();

        if (data.status === 'FAILED') {
            // console.log("Failed to get the username",data);
            return { error: true, message: data.comment };
        } else {
            // console.log({ error: false, message: data.result });
            return { error: false, message: data.result };
        }
    } catch (err) {
        return { error: true, message: err.message };
    }
}


const getForceRating = async (username)=>{
    var url = ` https://codeforces.com/api/user.rating?handle=${username}`;
    try{
        const response  = await fetch(url,{
            method:'GET',
        })
        const data = await response.json();
        if (data.status === 'FAILED') {
            // console.log("Failed to get the username",data);
            return { error: true, message: data.comment };
        } else {
            // console.log({ error: false, message: data.result });
            return { error: false, message: data.result };
        }
    }
    catch(error){
        return { error: true, message: err.message };
    }
}

module.exports = {
    getForceCount,getForceRating
}