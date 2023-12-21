const {Schema,model} = require('mongoose');

const codefroceSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    contribution:{
        type:Number,
        default:0,
    },
    contest: {
        type: [
            {
                contestId: Number,
                contestName: String,
                handle: String,
                rank: Number,
                ratingUpdateTimeSeconds: Number,
                oldRating: Number,
                newRating: Number,
            }
        ],
        default: [],
    },
})

const codeforceModel = new model('codeforceSchema',codefroceSchema);

module.exports = {codeforceModel};
