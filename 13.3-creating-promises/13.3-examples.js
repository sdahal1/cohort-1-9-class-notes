//There is a better way to "wait" for async code to complete before executing more code. This will be necessary if we have some code that depends on an asynchrnous operation to finish in order to run properly-  Promises solve this issue. Promises allow you to wait for an async operation to complete before running other lines of code which rely on the async operation's completion
const fs = require("fs");

let quote = null;

console.log("Finding a quote...");



//Promises allow us to make easier to write code that waits for async code to complete before running more code
const quotesTicket = new Promise((resolve, reject)=>{
    console.log("creating a promise")
    fs.readFile("quotes.txt", (error, buffer) => { //buffer represents the contents of the file
        console.log("inside fs.readfile")
        if (error) {
            // throw error;
            return reject("oops no file found")

        }
        const lines = buffer.toString().split("\n"); //you get an array of quotes from quotes.txt
        quote = lines[Math.floor(Math.random() * lines.length)];
        return resolve(quote)

    });
})





quotesTicket
    .then((msg)=>{ //.then() will run once the async code in the quotesTicket is resolved /finished running
        console.log(`Your quote is: ${quote}`);
        console.log("resolved message was", msg)
    })
    .catch((error)=>{
        console.log(error)
    })

console.log(quotesTicket)
console.log("texting a friend");
console.log("loading up nav bar");
//FS example from Platform, then convert to a promise




//three states of a Promise-> Pending, fulfilled, rejected




//promise will stay pending if there is no resolve in the promise




//show how to resolve a promise and catch any errors that occured if the promise did not resolve



