const firstname = "Rob"; //global variable b/c its not defined inside a function
// console.log(firstname)

sayHi()


function sayHi(){
    console.log("wazzaaaap")
}


function getFavFoods(){
    const robsFavDessert = "Ice cream" //functionally scoped variable
    // console.log(robsFavDessert)
    // console.log(firstname)
    
}


//block/local scopes-> for loops and if statements
let evenNumbersArray = []
for(let i = 2; i<100; i+=2){
    evenNumbersArray.push(i)
}


if(firstname === "Rob"){
    let lastname = "Dahal"
}
console.log(lastname);

console.log(evenNumbersArray)

getFavFoods()









