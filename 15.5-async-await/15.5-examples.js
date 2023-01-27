const axios = require("axios");

// const findAllPlayers = async () => {
async function findAllPlayers() {
    try {
        const res = await axios.get("http://localhost:5000/pyers");
        // console.log(res)
        return res.data;
    } catch (err) {
        // console.log(err.message)
        throw err.message; //will hit the .catch()
        //return err.message // will hit the .then()
    }
    // .then(res=>{
    //     console.log(res.data)
    // })
    // .catch(err=>{
    //     console.log(err.message)
    // })
}

// await findAllPlayers()
//     .then((players) => {
//         console.log("got playersponse", players);
//     })
//     .catch((errormessage) => console.log("error", errormessage));


async function updateIfExists(id, body) {
    //what kind of request to check for a player with an id?
    try{
        const response = await axios.get(`http://localhost:5000/players/${id}`)
        console.log(response.data);
        const responseFromPutReq = await axios.put(`http://localhost:5000/players/${id}`, body);
        console.log(responseFromPutReq.data);
        return responseFromPutReq.data.name
    }
    catch(err){
        console.log(err.message);
        throw err.message
    }

    // return axios
    //     .get(`http://localhost:5000/players/${id}`)
    //     .then((response) => {
    //         console.log("found player", response.data)
    //         //what kind of request to make an update?
    //         return axios.put(`http://localhost:5000/players/${id}`, body);
    //     })
    //     .then((responseFromPutReq) => {
    //         console.log("updated player succesfully", responseFromPutReq.data);
    //         return responseFromPutReq.data.name
    //     })
    //     .catch((err) => {
    //         console.log("error", err.message);
    //     });
}

let updatedLuka = {
    name: "Luka The Don",
    team: "Mavericks",
    number_championships: 1,
    state: "Dallas",
};

updateIfExists()
    .then(res=>{
        console.log("res is this", res)
    })
    .catch(err=>{
        console.log("err is this", err)
    })

