let info = {
  numGames: 5,
  points: 300,
  teamsPlayed: [ "lakers", "bulls", "wizards", "celtics", "heat"]
}


// should convert the pointsScored to a pointsPerGame
// should default to 0 if there is no `pointsScored` key
// should default to 0 if no stats is provided
function getPointsPerGame(stats){
  return stats.pointsScored/stats.numGames
}

// console.log(getPointsPerGame({numGames: 10, pointsScored: 200}));
// console.log(getPointsPerGame({pointsScored: 200})); //what if the key "numGames" is missing? or what if pointsScored is missing?
// console.log(getPointsPerGame()); //what if we dont even provide any data?



// should return "true" if the opponentName has already been played
// should return false if the opponentName has not been played
// should still work if there is no `teamsPlayed` key
// should still work if no teamInfo is provided
// should still work if no arguments are provided
function checkIfTeamHasPlayed(teamInfo, opponentName){
  let teamsPlayed = teamInfo.teamsPlayed; //how else can we write this to be more DRY?
  for(let i = 0; i<teamsPlayed.length; i++){
    if(teamsPlayed[i] === opponentName){
      return true
    }
  }
  return false;
}


console.log(checkIfTeamHasPlayed(info, "bulls"))


