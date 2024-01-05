const {userModel} = require("../models/userSchema");


const editImage = (req,res) =>{
   
}

const editLeetcodeUsername = async (req,res) =>{
    const doc = await userModel.findOneAndUpdate(req.user,{leetcode:req.body.newUsername},{
        new:true,
    });
    console.log(req.body);
    res.send(doc);
}

const editCodeforceUsername = async (req,res) =>{
    const doc = await userModel.findOneAndUpdate(req.user,{codeforces:req.body.newUsername},{
        new:true,
    });
    console.log(req.body);
    res.send(doc);
}

const editCodechefUsername = async (req,res) =>{
    const doc = await userModel.findOneAndUpdate(req.user,{codechef:req.body.newUsername},{
        new:true,
    });
    res.send(doc);
}

const editGithubUsername = async (req,res)=>{
    const doc = await userModel.findOneAndUpdate(req.user,{github:req.body.newUsername},{
        new:true,
    });
    console.log(req.body);
    res.send(doc);
}


module.exports = {
    editImage,editLeetcodeUsername,editCodeforceUsername,editCodechefUsername,editGithubUsername
}