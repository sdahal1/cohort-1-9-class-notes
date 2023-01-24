//metaphor-> sandwich ticket -> asynchronous operations -> non-blocking
/* 
    1. You order a sandwich
    2. You get back a ticket
    3. You don't know exactly how long it will take to get back your sandwich so you wait
        You get to do other things while waiting for your sandwich. (Texting friend/family, check social media, check news)
    4. Whenever your sandwich is ready, you present your ticket and get your sandwich
    */

//synchronous (sync) code -> blocking -> run in the order that it is written

let result = [];
for (let i = 0; i < 30; i++) {
    if (i === 8) {
        result.push("Kobe!");
    } else {
        result.push(i);
    }
}

// console.log(result);

//async code-> some code in javascript runs asynchronously-> it allows other lines of code to run while the async code is still running-> code does not run in the order that it is written

//example of async code- setTimeOut()
function useSetTimeout() {
    console.log("Start! loading up the logo and search bar");

    //settimeout() is an async operation
    // setTimeout(() => {
    //     console.log("inside timeout- 1000 ms");
    // }, 1000);

    setTimeout(() => {
        console.log("inside timeout- ZERO ms- loading up the stock data");
    }, 1000);

    console.log("End! loading up the news");
}

// useSetTimeout();

/* 
Event loop (event queue) -> when the JS interperter (node) runs the code, it will categorize the code into either sync code or async code. It will put all the async code into a queue (line-> first in first out) and will only run the async code after all the sync code has finished running

Sync operations:
-useSetTimeout()
-console.log("Start!");
-console.log("End!");


Async operations:


  setTimeout(()=>{
      console.log("inside timeout")
  },1000)

   setTimeout(()=>{
      console.log("inside timeout- ZERO ms")
   },0)


  Summary: so insideTimeout gets logged exactly 1 second after all the sync code runs
*/

//Example with 0 ms for setTimeOut()-> still in event loop

//Why use async code?- Api calls/network requests, filesystem operations, sending email/text. Non-blocking code allows websites and software apps to have better performance for the end user.

//use function download() example from platform to examine the platform example

function download(url) {
    console.log(`Start downloading video from ${url} ...`);

    setTimeout(() => {
        const fileName = url.split("/").pop(); //['https:', 'www.thinkful.com', 'sync-and-async.mov' ]
        console.log(`Video downloaded from ${url} to ${fileName}.`);
        return fileName;
    }, 2000);
}

function process(videoFile) {
    console.log(`Start processing ${videoFile} ...`);

    setTimeout(() => {
        console.log(`Video processing complete: ${videoFile}.`);
    }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";

const fileName = download(url);

process(fileName);


/* 
Sync code

const fileName = download(url);
console.log(`Start downloading video from ${url} ...`);

process(fileName);
console.log(`Start processing ${videoFile} ...`);


Async code

 setTimeout(() => {
        const fileName = url.split("/").pop(); //['https:', 'www.thinkful.com', 'sync-and-async.mov' ]
        console.log(`Video downloaded from ${url} to ${fileName}.`);
    }, 2000);

     setTimeout(() => {
        console.log(`Video processing complete: ${videoFile}.`);
    }, 4000);


*/