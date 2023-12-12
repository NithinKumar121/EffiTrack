const express = require("express");
const cors = require("cors");


const PORT = 5000;

const app = express();




app.listen(PORT,console.log("listening on port " + PORT));

app.get("/api/login",(req,res)=>{
    console.log("login successful");
})