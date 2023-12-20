require('dotenv').config();
const express = require("express");
const cors = require("cors");
const PORT = 5000;
const app = express();
const connection = require('./db');
const leetcodeRoutes = require('./routes/leetcodeRoutes');
const codeforcesRoutes = require('./routes/codeforcesRoutes');
const githubRoutes = require('./routes/githubRoutes');
const codechefRoutes = require('./routes/codechefRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use(cors());



// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://localhost:3000/");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

app.use('/api/leetcode',leetcodeRoutes);
app.use('/api/codeforces',codeforcesRoutes);
app.use('/api/github',githubRoutes);
app.use('/api/codechef',codechefRoutes);
app.use('/api/user/',userRoutes);
connection();

app.listen(PORT,console.log("listening on port " + PORT));