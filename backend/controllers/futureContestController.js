const fetchContestData = async(req,res)=>{
    try{
        const url = `https://clist.by/api/v1/contest/?username=Cibiyanna26&api_key=${process.env.CLIST_TOKEN}&resource__id=2`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }})
        const data = await response.json();
        if(!data){
            return res.status(500).json({error:true,message:"Can't fetch the upcoming data"});
        }
        return res.status(200).json({error:false,message:data})
    }
    catch(err){
        return res.status(409).json({error:true,message:"can't parse the data fetching is not completed"})
    }
    
}
  

module.exports = fetchContestData;
