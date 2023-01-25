//axios allows us to make requests to apis in javascript

//import axios first
const axios = require('axios');


/* 

//How to make a request using axios

axios.get("http://localhost:5000/playerkljs")
    .then(({data,status,statusText})=>{
        console.log("load up the players stats")
        //form the response, most common properties we want are: .data, .status, .statusText
        console.log(data) //data contains the information from the api that you also see in postman's response
        console.log(status)
        console.log(statusText)

    })
    .catch(err=>{
        console.log("Could not load players, somethign went wrong")
        console.log(err.message);
    })

*/

function getPlayerNames(){
    //return back a promise that returns only the player names in an array
    return axios.get("http://localhost:5000/players")
    .then(({data,status,statusText})=>{
        const namesOnly = data.map(player=>player.name)
        return namesOnly;
    })
    .catch(err=>{
        console.log(err.message);
    })
}

// getPlayerNames()
//     .then(info=>{
//         console.log(info)
//     })

function getPlayersFromGivenState(stateName){
    //return back a promise that returns only the player names in an array
    return axios.get("http://localhost:5000/players")
    .then(({data,status,statusText})=>{
        const matchingPlayers = data.filter(player=>player.state === stateName)
        console.log(matchingPlayers)
        return matchingPlayers;
    })
    .catch(err=>{
        console.log(err.message);
    })
}

getPlayersFromGivenState('California');


