const mongoose  = require('mongoose');
const {Schema,model} = mongoose;

const userSchema = new Schema({
    userid:{type:Number,required:true,unique:true},
    username:{type:String, required:true,unique:true},
    email:{type:String, required:true,unique:true},
    password:{type:String,required:true},
    created:{type:Date,default:Date.now()},
    leetcode:{type:String,default:null},
    codeforces:{type:String,default:null},
    codechef:{type:String,default:null},
    github:{type:String,default:null},
})


const userModel = model('user', userSchema);

module.exports = {userModel};