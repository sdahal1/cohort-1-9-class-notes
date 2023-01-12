let info = {
  numGames: 5,
  points: 300,
  teamsPlayed: [ "lakers", "bulls", "wizards", "celtics", "heat"]
}


// should convert the pointsScored to a pointsPerGame
// should default to 0 if there is no `pointsScored` key
// output should default to 0 if no stats is provided
function getPointsPerGame({points=0, numGames=1}={}){
  return points/numGames
}

// console.log(getPointsPerGame(info))
// console.log(getPointsPerGame({numGames:4}))


// console.log(getPointsPerGame({numGames: 10, pointsScored: 200}));
// console.log(getPointsPerGame({pointsScored: 200})); //what if the key "numGames" is missing? or what if pointsScored is missing?
// console.log(getPointsPerGame()); //what if we dont even provide any data?



// should return "true" if the opponentName has already been played
// should return false if the opponentName has not been played
// should still work if there is no `teamsPlayed` key
// should still work if no teamInfo is provided
// should still work if no arguments are provided
function checkIfTeamHasPlayed({teamsPlayed=[]}={}, opponentName=""){
  // console.log(opponentName)
  // const {teamsPlayed=[]} = teamInfo;
  return teamsPlayed.includes(opponentName);
}



let info2 = {
  numGames: 5,
  points: 300,
  
}

// console.log(checkIfTeamHasPlayed(info, "bulls"))
// console.log(checkIfTeamHasPlayed(info, "spurs"))
// console.log(checkIfTeamHasPlayed(info2, "spurs"))
console.log(checkIfTeamHasPlayed(undefined,"spurs"))
// console.log(checkIfTeamHasPlayed())






