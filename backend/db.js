const mongoose = require("mongoose");

module.exports = ()=>{
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log('database is connected');
    }
    catch(error){
        console.log(error);
    }
}