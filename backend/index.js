require('dotenv').config();
const express = require("express");
const cors = require("cors");
const PORT = 5000;
const app = express();
const leetcodeRoutes = require('./routes/leetcodeRoutes');
const codeforcesRoutes = require('./routes/codeforcesRoutes');
const githubRoutes = require('./routes/githubRoutes');
app.use(express.json());
app.use(cors());

app.listen(PORT,console.log("listening on port " + PORT));

app.use('/api/leetcode',leetcodeRoutes);
app.use('/api/codeforces',codeforcesRoutes);
app.use('/api/github',githubRoutes);



