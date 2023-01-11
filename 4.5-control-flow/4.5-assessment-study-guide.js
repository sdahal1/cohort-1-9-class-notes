/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `team`, it is referring to an object. Each object has the following shape:

   {
     name: "Lakers",
     city: "Los Angeles" ,
     stars: [ "Lebron James", "Russell Westbrook", "Anthony Davis"]
   }
*/


const team = {
  name: "Lakers",
  city: "Los Angeles" ,
  stars: [ "Lebron James", "Russell Westbrook", "Anthony Davis"]
}


// Use a conditional (ternary) operator below.
function checkIfStarIsOnTeam(team, player) {
   //if the team.stars array has a value containing the player name-> then return true, otherwise return false
  //  if(team.stars.includes(player)) return true
   
  //  return false
  

  return team.stars.includes(player) ? true : false

  // return team.stars.includes(player);

   
}

console.log(checkIfStarIsOnTeam(team, "Simone Biles")) //true
console.log(checkIfStarIsOnTeam(team, "Lebron James")) //true


// Use if else-if else first then convert to switch statements
function generateChampionBanner(team, numberChampionships) {
  //if the number of championships is equal to 0, then print a message related to that-> no banners to show
  //if the number of championships is equal to 1, then print a message related to that-> "Got one! teamnamehere are champions!"
  //if the number of championships is equal to 2, then print a message related to that-> "teamnamehere are two time champions!"
  //if the number of championships is greater than 2, then print a message related to that-> "teamnamehere are talking about a dynasty!"
  let banner;
  // if(numberChampionships === 0){
  //   banner = 'no banners to show';
  // }else if(numberChampionships === 1){
  //   banner = `Got one! ${team.name} are champions!`
  // }else if(numberChampionships === 2){
  //   banner = `${team.name} are two time champions!`
  // }else{
  //   banner = `${team.name} are talking about a dynasty!`
  // }
  switch(numberChampionships) {
    case(0):
      banner = 'no banners to show';
      break;
    case(1):
      banner = `Got one! ${team.name} are champions!`;
      break;
    case(2):
      banner = `${team.name} are two time champions!`;
      break;
    default:
      banner = `${team.name} are talking about a dynasty!`
  }

  return banner;
}




console.log(generateChampionBanner(team, 2))




let today = "Friday"
let message;


today === "Monday" 
  ? message = "Thats the day of focus" 
  : message = "What day is it?"