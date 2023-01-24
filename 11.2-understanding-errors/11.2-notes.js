// 1. System error: when something breaks related to rules for the operating system
const fs = require("fs");

// 2. Assertion errors: errors generated when testing -> Chai example: expect(5).to.equal(4)
// 3. Syntax errors: When syntax is used incorrectly
// for(let i=0, i<10, i++){

// 4. Type errors: When you misuse a data type
let x = 5;
let result = x.find(elem=> "hi")
// 5. Reference errors-> when you reference a variable that doesn't exist or is out of scope or you try to access a variable before it's initialized


  
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./hello.txt',
            {encoding:'utf8', flag:'r'});
 
// Display the file data
console.log(data);

// All errors need to have some error code and error message