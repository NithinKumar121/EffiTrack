const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const codechefSchema  = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    platform:{type:String, default:null},
    currentRating:{type:Number,default:null},
    hightestRating:{type:Number,default:null},
    globalRating:{type:Number,default:null},
    countryRank:{type:String,default:null},
    stars:{type:String,default:null},
})

const codechefModel = model('codechefSchema',codechefSchema);

module.exports = {codechefModel};