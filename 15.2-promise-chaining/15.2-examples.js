const axios = require("axios");
const BASE_URL = "http://localhost:5000/players";


//check if a player with the name "Kobe" exists -> GET

function createPlayerIfPlayerDoesntExistYet(playerName,team, number_championships, state){
    return axios.get(BASE_URL)
        .then(({data})=>{
            let found = data.find(player=>player.name === playerName)
            
            if(!found){
                //If it not exist, then create one -> POST
                const newPlayer = {name: playerName, team, number_championships, state};
                return axios.post(BASE_URL, newPlayer);
            }else{
                throw `DID NOT CREATE ${playerName} because he is already in our server`;
            }
        })
        .then(response=>{
            console.log("successfully created new player", response.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
createPlayerIfPlayerDoesntExistYet("Kobe","Lakers", 5, "California");
createPlayerIfPlayerDoesntExistYet("Dwayne Wade", "Heat", 3, "Miami");


