const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userTokenSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expired:30*86400 // 30days
    }
});


const userToken = mongoose.model('UserToken',userTokenSchema);

module.exports = {userToken};