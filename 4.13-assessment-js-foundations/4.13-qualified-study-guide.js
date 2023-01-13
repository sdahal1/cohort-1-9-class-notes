/*
Input: Teams array containing team objects


let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  }
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3

  }
  {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
]

Write a function that returns a team that matches the given city and player

1. should return null if a team cannot be found by city
2. should return null if a team cannot be found by player
3. should return the team if its matching a city and contains the given player

*/


let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  },
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3

  },
  {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
]

/* 

Problem solving advice:
1. solve it without coding
2. break down the steps you took to solve it without coding into english (pseudo code)
3. conver english to your coding language (js)
*/


function findTeamByCityAndPlayer(teams=[], cityParam, player) {
  //look at each object in the teams array -> loop
  for(let team of teams){
    // console.log(team.city)
    //for each team focus on the city property. compare this city with the given city parameter
    // const {city,players} = team;

    if(team.city === cityParam){
      //if they do match, focus on the players of the team
      //check if the given player is in the players array. if it is not, go to next iteration
      //if it is a match, return the current team
      if(team.players.includes(player)){
        return team;
      }
    }
  }
  //if we completed all iterations, and we havent found a match, return null
	return null;
}

// console.log(findTeamByCityAndPlayer(teams, "New York", "Kevin Durant"))
/* 
output
 {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
*/



/*
Input: Team will be an object, cities will be an object


// Team object
let newTeam = {
  name: "Clippers",
  city: "Los Angeles",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}


Cities Object
let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}


Add a city from a given team to a given collection of cities and update the cities collection objects info

1. If called with only a team and no cities object, then use an empty object
2. If the given team's city is not in the cities object yet, then create a new key in the cities object with the given team's city and give it keys for numberOfPlayers, numberOfChampionships, and teams 
3. If the cities object already has a city that matches the given team, then update the cities object at that city key to update the number of players, number of championships and add to that cities teams array the given team

*/

let newTeam = {
  name: "Clippers",
  city: "Los Angeles",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}

let newTeam2 = {
  name: "Heat",
  city: "Miami",
  players: ["Dwayne Wade", "Ray Allen"],
  championships: 3
}

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}
/* 
output: 

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 5,
    numberOfChampionships: 21,
    teams: ["Lakers", "Clippers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}

*/


function addTeamToCities(team={}, cities={}) {
	//focus on the city of the given team-> remember that city
  const givenTeamsCity = team.city;

  //see if the given teams city is a key in the given cities object
  //if we find a key that matches the  given teams city
  if(givenTeamsCity in cities){
    //find the object associated with that city and update the following:
    let objectToUpdate = cities[givenTeamsCity]
    //update totalNumberOfPlayers
    objectToUpdate.totalNumberOfPlayers += team.players.length
    //numchampionships
    objectToUpdate.numberOfChampionships += team.championships;
    //teams array
    objectToUpdate.teams.push(team.name)
  }else{
    //add the key representing the given teams city to the cities collection and set the value to be an object with the keys totalNumberOfplayers, numchampionships, teams
    cities[givenTeamsCity]= {
      totalNumberOfPlayers: team.players.length,
      numberOfChampionships: team.championships,
      teams: [team.name]
    }
  }

  return cities;
      
}


console.log(addTeamToCities(newTeam, cities_usa))
console.log(addTeamToCities(newTeam2, cities_usa))





function calculateTotalChampionships(cities={}) {
	
}





/*

1. should return null if the cities is empty
2. should return a receipt of all items in the cart
3. example input:

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}

//example output: "Los Angeles has 20 championships and the following teams: Lakers\n New York has 3 championships and the following teams: Knicks, Nets\n San Franscisco has 5 championships and the following teams: Warriors \n Total Championships: 28"

*/
function printInfo(cities={}) {
	
}


// console.log(printInfo(cities_usa))