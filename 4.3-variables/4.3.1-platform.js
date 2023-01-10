/* 
Use let for:

1. variables that can be reassigned


Use const for:
1. variables that should not be reassigned. variables that should have a constant value without being reassigned to a new value
2. works slightly differently for reference types (objects and arrays). You still cannot reassign a const variable but if the variable is equal to an object or array, you can modify the object or array
*/

let price = 9.99;

// price = price + 2 
price += 2;

console.log(price)

const daysInAweek = 7;

const dobOfMyPet = '1/1/2020'





const product = { priceInCents: 2100, name: "Yellow Beanie", size: "M" };

//can't reassign a const
// product = {priceInCents: 2100, name: "Yellow Beanie", size: "M"}


//you can modify a const if its an object or array
console.log(product['priceInCents']) //bracket notation
console.log(product.name) //dot notation

// product.name = "Macbook"

console.log(product)



const favMoviesOrShow = ["Curb your enthusiasm", "Empire strikes back", "A clockwork orange", "Inception", "Scrubs"]

//update array at index 1
favMoviesOrShow[1] = "Death star strikes back too";

console.log(favMoviesOrShow)

favMoviesOrShow.pop();


favMoviesOrShow.push("Gladiator")
console.log(favMoviesOrShow)



const numbers = [0, 3, 7, 8, 23, 24];

for(let i = 0; i<numbers.length; i++){ //i += 1
    console.log(i, numbers[i])
}

