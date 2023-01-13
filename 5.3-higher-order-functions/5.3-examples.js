//Method -> a function that belongs to a datatype-> Array.forEach()
//Higher-order function: Any function that either accepts a function as one of its incoming arguments or returns a function
//Callback function: is the function that is given as an input to another function

let parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
];




const logPark = (parkObj)=>{
    console.log(`${parkObj.name} has this rating: ${parkObj.rating} at index`);
}


for(let i = 0; i<parks.length; i++){
    console.log("index", i);
    // console.log("current element", parks[i])
    logPark(parks[i])
}


parks.forEach(logPark)


parks.forEach((park,index)=>{
    console.log(`Park name: ${park.name}. Rating: ${park.rating}. Index number ${index}`)
})

//callback function -> a function that is given an argument to another function


const numbers = [1,3,8,23];

numbers.forEach((number,i)=>{
    number === 8 ? console.log("Kobe!") : console.log(`Number is this ${number} at index ${i}`)
})



