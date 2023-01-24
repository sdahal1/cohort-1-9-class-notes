function download(url) {
    console.log(`Start downloading video from ${url} ...`);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(url.length < 1){
                reject("Url not valid")
            }
            const fileName = url.split("/").pop(); //['https:', 'www.thinkful.com', 'sync-and-async.mov' ]
            console.log(`Video downloaded from ${url} to ${fileName}.`);
            // return fileName;
            resolve(fileName);
        }, 2000);
    })
}

function process(videoFile) {
    console.log(`Start processing ${videoFile} ...`);

    setTimeout(() => {
        console.log(`Video processing complete: ${videoFile}.`);
    }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";

const downloadTicket = download("")
downloadTicket
    .then((fileName)=>{
        process(fileName);
    })
    .catch((word)=>{
        console.log(word)
    })


console.log("does not rely on download-> nav bar");
console.log("does not rely on download-> footer");
