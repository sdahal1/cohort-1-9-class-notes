function compare(a, b, arr) {
    return a - b;
}
// + greater
// - less
// 0 they are equal

//        s        m         e
let x = [12,15,18,20,45,56,89]

function binarySearch(arr, value, cb) {
    //declare our start and end points
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const midpoint = Math.floor( (start + end) / 2);
        const compare = cb(arr[midpoint], value, arr);
        //when our mid guess is the value
        if(compare === 0) return midpoint;
        //[o,o,o,o,mid,x,x,x,x]
        //             ^----- want to be the new start
        else if( compare < 0) start = midpoint + 1;
        //[o,o,o,o,mid,x,x,x,x]
        //       ^----- want to be the new end
        else end = midpoint -1;
    }
    //value was not found
    return -1
}

console.log(binarySearch(x,89,compare));