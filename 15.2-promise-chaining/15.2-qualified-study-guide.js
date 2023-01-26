//what are we using to make api calls? 
const axios = require("axios");

//what is our base url?

function updateIfExists(id, body) {
  //what kind of request to check for a player with an id?
  return axios.get(`http://localhost:5000/players/${id}`)
    .then(response=>{
      // console.log(response.data)
      //what kind of request to make an update?
      return axios.put(`http://localhost:5000/players/${id}`,body)
    })
    .then(responseFromPutReq=>{
      console.log(responseFromPutReq.data);
    })
    .catch(err=>{
      console.log(err.message)
    })
}

let updatedLuka = {
  "name": "Luka The Don",
  "team": "Mavericks",
  "number_championships": 1,
  "state": "Dallas"
}


updateIfExists("4", updatedLuka)