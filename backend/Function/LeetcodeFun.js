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
    var username , submitStats;
    await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query }),
    })
    .then(response => response.json())
    .then(data => {
         username = data.data.matchedUser.username;
         submitStats = data.data.matchedUser.submitStats.acSubmissionNum;
    })
    .catch(error => console.error(`Error: ${error}`));
    return submitStats;
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
    var userContestRanking;
    var userContestRankingHistory;
    if (response.ok) {
        data = await response.json();
         userContestRanking = data.data.userContestRanking;
         userContestRankingHistory = data.data.userContestRankingHistory.filter((d)=>{
            return d.attended == true;
        });
    } else {
      console.error(`Error: ${response.status}, ${await response.text()}`);
    }
    return [userContestRanking,userContestRankingHistory];
}
  

module.exports = {
    getLeetCount , getLeetRating
}
