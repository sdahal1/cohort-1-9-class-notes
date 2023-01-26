const axios = require('axios')

const ids = [1,2,5]


//return back a promise that returns the ids of the deleted players
function bulkRetrieveAnotherWay(ids=[]){
    //1. generate an array of promises from the ids array
    const arrayOfAxiosDeleteRequests = ids.map(id=>{
        return axios.get(`http://localhost:5000/players/${id}`)
                    .then(resp=>{
                        return resp.data.name
                    })
    })

    return Promise.all(arrayOfAxiosDeleteRequests)
}


// bulkRetrieveAnotherWay(ids)
//     .then(info=>console.log(info))


//return back a promise that returns the ids of the deleted players
function bulkDelete(ids=[]){
    //1. generate an array of promises from the ids array
    const arrayOfAxiosDeleteRequests = ids.map(id=>{
        return axios.delete(`http://localhost:5000/players/${id}`)
                    .then(resp=>{
                        return id
                    })
    })
    console.log(arrayOfAxiosDeleteRequests)
    return Promise.all(arrayOfAxiosDeleteRequests)
}

bulkDelete(ids)
    .then(info=>{
        console.log(info)
    })
    .catch(err=>{
        console.log("something went wrong")
    })
