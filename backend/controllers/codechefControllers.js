const {getChefData} = require('../utils/CodeChefFun');

const getCodeChefDetails =async (req,res)=>{

    const username = req.user.codechef;    
    try{
        const response = await getChefData(username);
        if(response.error){
           return res.status(404).json({error:true,message:"username not found"});
        }
        return res.status(200).json({error:false,message:response.message});
    }
    catch(err){
        return res.status(500).json({error:true,message:err.message});
    }
}

module.exports = {
    getCodeChefDetails
}
