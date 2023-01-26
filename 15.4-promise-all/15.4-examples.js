const axios = require('axios')

const ids = [1,2,5]
/* 
//given an array of ids, we want to gather information about players in the server whose ids match and then proceed to running some code only once ALL of those players informations are found.

In situations when we want to run a bulk amount of api calls/other async code that returns promises and wait for all of those calls to resolve before doing some other code, we can us Promise.all()


Promise.all() allows us to make multiple asynchronous calls and wait for all of them to finish before running some code

Promise.all() accepts an array of pending promises

Promise.all()'s .then() will run only once all the pending promises in the input array are resolved
    -the callback parameter in the .then() will represent an array of the resolved data

Promise.all()'s .catch() will run if any single pending promise rejects
*/


function bulkRetrieve(ids=[]){
    // const arrayOfPromises = []
    // for(let id of ids){
    //     arrayOfPromises.push(axios.get(`http://localhost:5000/players/${id}`))
    // }

    const arrayOfPromises = ids.map(id=>axios.get(`http://localhost:5000/players/${id}`))

    return Promise.all(arrayOfPromises)
        .then((arrayOfResponses)=>{
            // console.log("word is this", arrayOfResponses[1].data)
            // return "x gon giv it to ya"
            let namesOnly = arrayOfResponses.map(response=>{
                return response.data.name
            })
            return namesOnly;
        })
        .catch(err=>{
            console.log("something went wrong")
        })
}

// console.log("bulkRetrieve returns this", bulkRetrieve(ids))

bulkRetrieve(ids)
    .then(x=>{
        console.log(x)
    })

// axios.get(`http://localhost:5000/players/1`)
//     .then(({data})=>{
//         console.log(data)
//     })

// axios.get(`http://localhost:5000/players/2`)
// .then(({data})=>{
//     console.log(data)
// })

// axios.get(`http://localhost:5000/players/5`)
// .then(({data})=>{
//     console.log(data)
// })

