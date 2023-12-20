const mongoose = require("mongoose");
const {Schema,model} = mongoose;


const lcProblemSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    TotalCount:{type:Number,default:0},
    Easy:{type:Number,default:0},
    Medium:{type:Number,default:0},
    Hard:{type:Number,default:0},
    CurrentRating:{type:Number,default:0},
})


const LcContestRating = new Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    total_contest:{type:Number,default:0},
    contest:[{title:String,rank:Number,rating:Number}],
    globalRating:Number,
})

const lcProblemModel = model('lcProblemSchema',lcProblemSchema);
const LcContestModel = model('lcContestSchema',LcContestRating);

module.exports = {
    lcProblemModel,LcContestModel
};

