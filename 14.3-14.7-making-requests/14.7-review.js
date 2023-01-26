
/* 

Make requests using Axios (get, post, put, delete) to make API calls

HTTP Methods (HTTP Verbs):
    GET- Request access to read information from a server
        -GetAll-> No id required. eg: localhost:5000/players
        -GetOne-> Need to specify the ID in the url  eg: localhost:5000/players/2
    POST - Requesst to create a new resource (create something new, new post, new comment, new message, new order)
        -Send body (containing information for the new resource) in the request in the form of: JSON
    PUT - Request to edit an existing resource
        - Need to specify the ID in the url
        - Send body (containing information for updating a resource) in the request in the form of: JSON
    DELETE - Request to delete an existing resource
        - Need to specify the ID in the url


Axios calls returns back to us  a promise that either resolves or rejects

*/

const axios = require('axios');



/* 


const pendingPromise = axios.get("https://api.cecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response)=>{
        // console.log(response.data)
        return "wazzaaap"
    })
    .catch(err=>{
        console.log(err.message)
        return "Url invalid"
    })
    


console.log("Pending promise is this", pendingPromise)

pendingPromise
    .then(response=>{
        console.log("response is this", response)
    })

*/


//If a function returns an axios call, does it return a promise regardless of if there is a .then .catch in the return? -> answer: YES! 
function getCoins(){
    return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response)=>{
            // console.log(response.data)
            return response.data.slice(0,2)
        })
        .catch(err=>{
            console.log(err.message)
            return "Url invalid"
        })
}

// console.log(getCoins())


getCoins()
    .then(res=>{
        console.log("res is this", res)
    })



   


    
   




