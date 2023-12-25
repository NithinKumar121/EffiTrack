const fetchContestData = async(req,res)=>{
    
    const url = `https://clist.by/api/v1/contest/?username=Cibiyanna26&api_key=${process.env.CLIST_TOKEN}&resource__id=2`;
    console.log(url)
    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        return res.status(200).json({error:false,data:data})
    })
    .catch(error => {
        return res.status(500).json({error:true,message:error});
    });
}
  

module.exports = fetchContestData;
