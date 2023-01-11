/*

To complete this practice problem, you will be writing two functions that will make use of accessing and looping over objects. When all tests are passing, you are done.

Input
Your input for both functions will be cart, an object that stores information about the quantity and price of each item in a cart. It will look something like this:

const cart = {
  "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
  "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 },
};
calculateCartTotal
The calculateCartTotal function will take in the cart and return a total price, in cents, of everything inside of it.

For example:

calculateCartTotal(cart); //> 3520
There are two "Pink Bucket Hat" items in the cart and a single pair of "Gold Round Sunglasses", which totals 3,520 cents.

printCartInventory
The printCartInventory function will take in the cart and return a string, joined by \n, of the quantity and name of each item.

For example:

printCartInventory(cart); //> "1xGold Round Sunglasses\n2xPink Bucket Hat\n"
Note: You may either include or exclude the final \n at the very end of the return value.

*/

const tournament = {
    "game1": { homeTeam: 100, awayTeam: 85 },
    "game2": { homeTeam: 98, awayTeam: 100 },
    "game3": { homeTeam: 50, awayTeam: 51 },
    "game4": { homeTeam: 10, awayTeam: 8 },
};


// Input
// Your input for both functions will be team

// calculateTotalPoints
//The calculateTotalPoints function will take in the tournament and return a total number of points scored from all teams in all games

function calculateTotalPoints(tournament){
  //get the values from the tournament object
  const values = Object.values(tournament)

  // console.log(values)
  let total = 0;
  for(let game of values){
    //console.log(game['homeTeam']) //game.homeTeam is also valid here
    total+= game['homeTeam'] + game['awayTeam']
  }

  return total
}

// console.log(calculateTotalPoints(tournament))



// printGameSummarys
// The printGameSummarys function will take in the tournament and return a string, joined by \n, of the game results for each game

// For example:
const tournament2 = {
  "Game 1": { homeTeam: 100, awayTeam: 85 },
  "Game 2": { homeTeam: 98, awayTeam: 100 },
  "Game 3": { homeTeam: 50, awayTeam: 51 },
  "Game 4": { homeTeam: 10, awayTeam: 8 },
};

function printGameSummarys(tournament){
  let result = "";

  for(let key in tournament){
    // console.log(key)
    let gameObject = tournament[key]
    
    // let resultWord;
    // if(gameObject.homeTeam>gameObject.awayTeam){
    //     resultWord = "beat"
    // }else{
    //   resultWord = "lost to"
    // }
    let currentGameSummary = `${key}: Home team ${gameObject.homeTeam>gameObject.awayTeam? "beat": "lost to"} the away team ${gameObject.homeTeam}-${gameObject.awayTeam} \n`
    // console.log(currentGameSummary)
    result += currentGameSummary
  }

  return result

}

console.log(printGameSummarys(tournament2)); //> "Game 1: Home team beat the away team 100-85 \n Game 2: Home team lost to the away team 98-100 \n etc;"