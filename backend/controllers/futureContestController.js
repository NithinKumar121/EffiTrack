const fetchContestData = async(req,res)=>{
    // const fetch = await import('node-fetch');
    const url = 'https://clist.by/api/v1/contest/?username=Cibiyanna26&api_key=0209cce28bb5e64e3f600db33f3351762f68e68f&resource__id=2';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data =await response.json();
    if(!data)
        return res
                .status(400)
                .json({error:true,message:"can't receive response from the api"})
    console.log(data);
    return res.status(200).json({error:false,message:data});
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
}


module.exports = fetchContestData;
