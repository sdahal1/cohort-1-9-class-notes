function compare(a, b, arr) {
    return a - b;
}

//       S        M          E  
let x = [12,15,18,20,45,56,89]

function binarySearch(arr, value, cb, start = 0, end = arr.length - 1) {
    // base case
    if (start > end) return -1; // are we still in a valid search location

    const midpoint = Math.floor( (start + end) / 2);
    const compare = cb(arr[midpoint], value, arr);
    if(compare === 0) return midpoint;
    else if( compare < 0) return binarySearch(arr, value, cb, midpoint + 1, end)
    else return binarySearch(arr, value, cb, start, midpoint - 1)
}

console.log(binarySearch(x,89,compare));


function isPalindrome(str) {
    const length = str.length;
    for (let start = 0, end = length - 1; start < end; start++, end--) {
        if (str[start] !== str[end]) {
            return false;
        }
    }
    return true;
}

const str = "racecar";
console.log(isPalindrome(str));

function isPalindrome(str) {
    //take first and last value of String, if true, then keep going
    //base case string.length = 1 or 0
    if(str.length <= 1) {
        return true
    }

    const firstLetter = str.slice(0,1)
    const lastLetter = str.slice(str.length-1)
    if(firstLetter === lastLetter) {
         return isPalindrome(str.slice(1,str.length-1))      
    } else {
        return false
    }
}

console.log(isPalindrome("rgkr"))


// // Write a function that takes an array of unknown set of numbers as input, 
// // and outputs an array with each input value doubled.

function doubleArray(array, index = 0) {

    if (index === array.length) {
        return;
    }

    array[index] *= 2;
    doubleArray(array, index + 1);
    return array;
}

doubleArray([1,2,3]) // ---> [2,4,6]