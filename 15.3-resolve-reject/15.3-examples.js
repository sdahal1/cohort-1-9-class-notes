const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function update(id, body) {
  if (!id || !body) return Promise.reject("Id and Body are required!");
  const url = `${BASE_URL}/players/${id}`;
  return axios.put(url, body);
}


let updatedLuka = {
    "name": "Luka Doncic future GOAT",
    "team": "Mavericks",
    "number_championships": 100,
    "state": "Dallas"
}


// update('4', updatedLuka)
//     .then(res=>{
//         console.log(res.data)
//     })
//     .catch(err=>{
//         console.log("errrrrrrrr");
//     })

// update()
//     .then(res=>{
//         console.log(res.data)
//     })
//     .catch(err=>{
//         console.log("errrrrrrrr");
//     })


//guess the result

// Promise.resolve("hello")
//     .then((value) => Promise.reject(value + " world")) //Promise.reject("hello world")
//     .then((result) => console.log("I said", result))
//     .catch((result) => console.log("They said: ", result));


//guess the result
Promise.resolve({ name: "Lebron" }) //object {name: "Lebron"}
    .then((value) => { //value =  {name: "Lebron"}
        return value.team //value.team === undefined
            ? Promise.reject(value)
            : Promise.resolve({ error: "Missing key." }); //resolved an object {error: "Missing key."}
    })
    .then((result) => console.log("Success:", result)) //result === { error: "Missing key." }
    .catch((result) => console.log("Failure:", result));