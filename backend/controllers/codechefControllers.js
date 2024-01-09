const {getChefData} = require('../utils/CodeChefFun');

const getCodeChefDetails =async (req,res)=>{

    const username = req.user.codechef;    
    try{
        const response = await getChefData(username);
        if(!response){
            res.status(404).json({error:true,message:"username not found"});
        }
        res.status(200).json({error:false,message:response});
    }
    catch(err){
        res.status(404).json({error:true,message:"Username name is not valid"});
    }
}

module.exports = {
    getCodeChefDetails
}
