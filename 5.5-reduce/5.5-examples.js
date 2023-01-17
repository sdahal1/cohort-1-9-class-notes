const areas = [768, 1004.2, 433.1];

/* 

let sum = 0;
for(let i = 0; i<areas.length; i++){
    sum += areas[i]
}

console.log(sum);

*/


//reduce lets us do the accumulator pattern using an array method



//use reduce to find a total sum
let total = areas.reduce((sum,area)=>{
    //whatever you return will be added to the accumulator (sum)
    // return sum + area;

    sum += area;
    return sum;
},0)

// console.log(total)

//sum-> 0, 768, 768+1004.2 =  1772.2, 



const parks = [
    { name: "Acadia", areaInSquareKm: 198.6 },
    { name: "Crater Lake", areaInSquareKm: 741.5 },
    { name: "Kenai Fjords", areaInSquareKm: 2710 },
    { name: "Zion", areaInSquareKm: 595.9 },
];



/* 
let result = {}


for(let i = 0; i<parks.length; i++){
    let eachPark = parks[i]
    result[eachPark.name] = eachPark.areaInSquareKm;
}

console.log(result);

*/

//you can also use reduce to accumulate data into an object/array

let result = parks.reduce((result,eachPark)=>{
    result[eachPark.name] = eachPark.areaInSquareKm;
    return result;
},{})


console.log(result);

