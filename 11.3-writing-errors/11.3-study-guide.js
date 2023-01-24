let players = {
    "Lebron": {
        points: [30,22,32,26],
        team: "Lakers"
    },
    "Jordan": {
        points: [36,30,30,34],
        team: "Bulls"
    },
    "Rob": {
        points: [],
        team: "CallBackers"
    },
    "Durant": {
        points: [25],
        team: "Nets"
    }
}
//Throwing an array of errors
function findPlayerAveragePoints(players={}, name){
    const errors = [];
    //if player name is not in the players object, have an error pushed to an array
    let points;
    if(!players[name]){
        errors.push("Name of player not found");
        // throw errors
        points = []
    }else{
        points = players[name].points;
    }

    

    //if player has not played any games, have an error pushed to an array
    if(points.length === 0){
        errors.push("Player has not played any games");
    }else if(points.length < 2){
        //if player has played in less than 2 games, have an error pushed to an array
        errors.push("Not enough games played. Must play at least 2 games");
    }
    //if there are any errors in our array, then throw all the errors 
    if(errors.length > 0){
        throw errors;
    }
    let totalPoints = points.reduce((accum,element)=>{
        return accum + element
    },0)

    return totalPoints/points.length






    //if there are no errors in our array, return the player Average points
}

console.log(findPlayerAveragePoints(players,"Iverson"))



