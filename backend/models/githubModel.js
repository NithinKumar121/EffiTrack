const mongoose = require('mongoose');
const {Schema,model} = mongoose;


const githubSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    platform_name:String,
    repo:{
        type:[
            {
                name:String,
                url:String,
                desc:String,
            }
        ],
        default:[]
    },
    contributions:{type:Number,default:0},
    calender:{type:String,default:""}
})

const githubModel = model("githubSchema",githubSchema);

module.exports = {githubModel};