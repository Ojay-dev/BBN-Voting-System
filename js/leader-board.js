const leaderboardScore = document.querySelectorAll(".leaderboard>span");

for (let i = 0; i < leaderboardScore.length; i++) {
  leaderboardScore[i].innerHTML = JSON.parse(
    localStorage.getItem("candidate")
  )[i];
}
