const mongoose  = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username:{type:String, required:true,unique:true},
    email:{type:String, required:true,unique:true},
    password:{type:String,required:true},
    created:{type:Date,default:Date.now()},
    leetcode:{type:String,default:"unknown"},
    codeforces:{type:String,default:"unknown"},
    codechef:{type:String,default:"unknown"},
    github:{type:String,default:"unknown"},
})


const userModel = mongoose.model('user', userSchema);

module.exports = {userModel};