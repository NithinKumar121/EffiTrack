const getLeetCount =  async (Username) =>{
    const url = "https://leetcode.com/graphql";
    const query = `
    {
    matchedUser(username: "${Username}") {
        username
        submitStats: submitStatsGlobal {
        acSubmissionNum {
            difficulty
            count
            submissions
        }
        }
    }
    }
    `;

    const headers = {
    "Content-Type": "application/json",
    };

    await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query }),
    })
    .then(response => response.json())
    .then(data => {
        const username = data.data.matchedUser.username;
        const submitStats = data.data.matchedUser.submitStats.acSubmissionNum;

        console.log("Username:", username);
        console.log("Submit Stats:", submitStats);
    })
    .catch(error => console.error(`Error: ${error}`));
}


const getLeetRating = async (username) =>{
    var data ;
    const response = await fetch('https://leetcode.com/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
        'Referer': 'https://leetcode.com/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: JSON.stringify({
        query: `
          query getContestRankingData($username: String!) {
            userContestRanking(username: $username) {
              attendedContestsCount
              rating
              globalRanking
              topPercentage
              totalParticipants
            }
            userContestRankingHistory(username: $username) {
              attended
              trendDirection
              problemsSolved
              totalProblems
              finishTimeInSeconds
              rating
              ranking
              contest {
                title
                startTime
              }
            }
          }
        `,
        variables: { username: username },
      }),
    });
  
    if (response.ok) {
        data = await response.json();
        const userContestRanking = data.data.userContestRanking;
        const userContestRankingHistory = data.data.userContestRankingHistory.filter((d)=>{
            return d.attended == true;
        });
        console.log("User Contest Ranking:", userContestRanking);
        console.log("User Contest Ranking History:", userContestRankingHistory);
    } else {
      console.error(`Error: ${response.status}, ${await response.text()}`);
    }
}
  

module.exports = [
    getLeetCount , getLeetRating
]
