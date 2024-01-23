// const puppeteer = require('puppeteer-core');

const getChefData =  async  (username)=>{
    const url = `https://codechef-api.vercel.app/${username}`
    try{
      const response = await fetch(url,{
        method:'GET',
      })
      const data = await response.json();
      if(!data.success){
        return {error:true,message:'username not found'};
      }
      return {error:false,message:data}

    } catch(e){

      return {error:true,message:"connection error"}

    }
    
}

module.exports = {
    getChefData
}