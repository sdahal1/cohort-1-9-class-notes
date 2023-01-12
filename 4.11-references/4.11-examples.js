//primitive types: numbers, strings, booleans, null, undefined -> when you create a variable that references a primitive type, a separate copy in another memory location is created
let x = 5
let y = x

x+=1;


let person1 = "Lebron";
let person2 = person1;

person1 += " The GOAT"


// console.log(person1)
// console.log(person2)




//reference types: Arrays and Objects-> when you create a variable that is equal to an existing variable which is an array/object, then both variables reference the SAME array/object
const booklist = ["a", "b", "c"]

const anotherList = booklist;


const actualCopyList = [...booklist]

booklist.push("d");

console.log(booklist);
console.log(anotherList);
console.log(actualCopyList);
