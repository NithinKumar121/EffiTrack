const getChefData = async (username) => {
  const url = `https://codechef-api.vercel.app/${username}`;
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

var getForceCount = async (username) => {
  var url = `https://codeforces.com/api/user.info?handles=${username}`;
  var data;
  await fetch(url, {
    method: "GET",
  })
    .then((Response) => Response.json())
    .then((d) => {
      data = d;
    })
    .catch((err) => console.log(err));
  return data;
};

const getForceRating = async (username) => {
  const url = ` https://codeforces.com/api/user.rating?handle=${username}`;
  const data = null;
  await fetch(url, {
    method: "GET",
  })
    .then((Response) => Response.json())
    .then((d) => {
      data = d;
    })
    .catch((err) => console.log(err));
  return data;
};

const getGithubRepo = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`;
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();
  var git_repo_details = [];
  data.forEach((d) => {
    git_repo_details.push({
      name: d.name,
      url: d.html_url,
      desc: d.description,
      ano_url: d.url,
    });
  });
  return git_repo_details;
};

const getCalender = async () => {
  const url = "https://ghchart.rshah.org/Cibiyanna26";
  await fetch(url, {
    method: "GET",
  })
    .then((res) => res.text())
    .then((res) => {
      // const holder = document.createElement('div')
      // holder.innerHTML = res
      // console.log(holder.querySelector('path'))
      console.log(res);
    });
};

const getLeetCount = async (Username) => {
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
  var username, submitStats;
  await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((data) => {
      username = data.data.matchedUser.username;
      submitStats = data.data.matchedUser.submitStats.acSubmissionNum;
    })
    .catch((error) => console.error(`Error: ${error}`));
  return submitStats;
};

const getLeetRating = async (username) => {
  var data;
  const response = await fetch("https://leetcode.com/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
      Referer: "https://leetcode.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
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
    userContestRankingHistory = data.data.userContestRankingHistory.filter(
      (d) => {
        if(d.attended)return true
        return false;
      },
    );
  } else {
    console.error(`Error: ${response.status}, ${await response.text()}`);
  }
  return [userContestRanking, userContestRankingHistory];
};

export {
  getLeetCount,
  getLeetRating,
  getCalender,
  getChefData,
  getForceCount,
  getForceRating,
  getGithubRepo,
};
