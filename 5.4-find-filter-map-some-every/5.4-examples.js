//More array methods



//.find()

const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
    { name: "Indiana Dunes", rating: 4.8 },

];

/* 
let foundPark = null;
function findParkByName(parkObject, parkName){
    if(parkObject.name === parkName){
        return true;
    }else{
        return false;
    }
}

let parkToFind = "Gateway Arch";

for(let i = 0; i<parks.length; i++){
    if(findParkByName(parks[i], parkToFind)===true){
        foundPark = parks[i]
    }
}

console.log(foundPark)

*/


function findParkByName(parkObject, parkName){
    // if(parkObject.name === parkName){
    //     return true;
    // }else{
    //     return false;
    // }

    return parkObject.name === parkName;
}

function findParkByName(parks=[], parkName=""){
    //.find() will give you either an element that matches the condition in the callback, or undefined if no match
    const foundPark = parks.find((parkObj)=>{
        //RETURN a condition for what we want to find, and if that condition evaluates to "true", then the .find() will return the element that the condition evaluated true for

        return parkObj.name === parkName;
    })


    //const foundParkAnotherWay = parks.find((parkObj)=>findParkByName(parkObj,parkName))
    
    return foundPark;

}

const findParkByNameShortWay = (parks=[], parkName="")=>parks.find(({name})=> name === parkName)




// console.log(findParkByName(parks, "Grand Canyon"));
// console.log(findParkByNameShortWay(parks, "Indiana Dunes"));
// console.log(findParkByNameShortWay(parks, "Zion"));





/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ starting filter now ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


//.filter gives back an array of elements  that match the condition in the filter callback fn or an empty array if nothing matches
function findParksByRating(parks=[], rating=null){

    const result = parks.filter((parkObj,index)=>{
        return parkObj.rating >= rating;

    })

    return result;
}


const filterParksByRatingShortWay = (parks=[], rating=null)=> parks.filter((parkObj,index)=> parkObj.rating >= rating)

//[{ name: "Grand Canyon", rating: 5 },  { name: "Gateway Arch", rating: 4.5 },  { name: "Indiana Dunes", rating: 4.8 }]

// console.log(filterParksByRatingShortWay(parks, 4.5))
// console.log(filterParksByRatingShortWay(parks, 6))



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ starting some and every now ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//.some() lets you check if at least one element matches a condition and it will return true if so, otherwise if no elements match a given condition, it will return false
function areSomeParksOverRating(parks=[], rating){

    const result = parks.some((parkObj, index)=>{
        //return a condition
        return parkObj.rating > rating;
    })

    return result;
}

//short way
const areSomeParksOverRatingShortWay = (parks=[], rating)=> parks.some(({rating:parkRating}, index)=> parkRating > rating)

// console.log(areSomeParksOverRating(parks, 4.8))//true
// console.log(areSomeParksOverRating(parks, 5))//true




//.every() lets you check if ALL elements matches a condition and it will return true if so, otherwise if not EVERY elements match a given condition, it will return false

function areALLParksOverRating(parks=[], rating){
    const result = parks.every((parkObj, index)=>{
        //return a condition
        return parkObj.rating > rating;
    })
    return result;
}


// console.log(areALLParksOverRating(parks, 3))//true
// console.log(areALLParksOverRating(parks, 4.4))//false



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ starting .map() now ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//.map builds up an array that will contain whatever you return in the .map() callback fn
function getNamesOfParksOverRating(parks=[], rating){
    let result = parks.map((parkObj,idx)=>{
        return parkObj.name;
    })

    return result;
}
//["Biscayne", "Grand Canyon", ]

console.log(getNamesOfParksOverRating(parks, 4.5));