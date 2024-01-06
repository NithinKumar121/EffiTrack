const puppeteer = require('puppeteer-core');

const getChefData =async  (username)=>{
    const url = `https://codechef-api.vercel.app/${username}`
    await fetch(url,{
      method:'GET',
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
}


module.exports = {
    getChefData
}