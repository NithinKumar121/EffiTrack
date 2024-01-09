const puppeteer = require('puppeteer-core');

const getChefData =async  (username)=>{
    const url = `https://codechef-api.vercel.app/${username}`
    const response = await fetch(url,{
      method:'GET',
    })
    const data = await response.json();
    return data;
}


module.exports = {
    getChefData
}