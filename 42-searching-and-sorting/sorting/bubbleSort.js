// do

//   swapped = false

//   for i = 1 to indexOfLastUnsortedElement-1

//     if leftElement > rightElement

//       swap(leftElement, rightElement)

//       swapped = true; ++swapCounter

// while swapped

function compare(leftElement, rightElement) {
    return leftElement - rightElement;
}
// + a is greater
// - b is less
// 0 they are equal

function bubbleSort(arr, compare) {
    let swapped;
    do { //do while loop executes at least once
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if ( compare(arr[i], arr[i+1]) > 0 ) {
                // destructuring swap
                [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ];
                // let temp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i+1] = temp;
                swapped = true;
            } 
        }
    } while (swapped);
    return arr
}

console.log(bubbleSort([8,1,4,3,2,7,6], compare));

