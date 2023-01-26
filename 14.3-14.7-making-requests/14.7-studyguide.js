const axios = require('axios');






function createPlayer(body) {
    return axios.post("http://localhost:5000/players",newObj)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err.message)
        })
}

let newObj = {
    "name": "Messi",
    "team": "Argentina",
    "number_championships": 1,
    "state": "Argentina"
}
// createPlayer(newObj)

function showOnePlayer(id) {
    axios.get(`http://localhost:5000/players/${id}`)
        .then((res)=>{
            console.log(res.data);
        })
        // .catch(err=>console.log(err))
        .catch(console.log)

}

// showOnePlayer(2);
// showOnePlayer(4);



let lebronIfKyrieNeverGotInjured = {
    "name": "Lebron James",
    "team": "Cavs",
    "number_championships": 5,
    "state": "Cleveland"
}
function updatePlayer(id, body) {
    return axios.put(`http://localhost:5000/players/${id}`,body)
    .then((res)=>{
        console.log(res.data);
    })
    // .catch(err=>console.log(err))
    .catch(console.log)
}

// updatePlayer(1,lebronIfKyrieNeverGotInjured);

function destroyPlayer(id) {
    return axios.delete(`http://localhost:5000/players/${id}`)
        .then((res)=>{
            console.log(res.data);
        })
        // .catch(err=>console.log(err))
        .catch(console.log)
}

// destroyPlayer("iuNPVg5")