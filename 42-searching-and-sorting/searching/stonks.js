// Problem: You are given a list of daily share prices for a stock. What is the
// maximum profit you could have made by buying a stock on one day, and selling
// on another?

// each element can be seen a day
// you can assume array is always 5 elements
// no negatives in our array
// cant go back in time!
// return 0 if nothing, or just return the max profit
// if there are multiple answers just return one of them


function superStockBuyer(A) {
    let smallest = Infinity
    let smallestIndex = 0
    for (let i = 0; i < A.length-1; i++) {
        if(A[i] < smallest) {
            smallest = A[i]
            smallestIndex = i
        }
    }
    let largest = -Infinity
    const daysAfter = A.slice(smallestIndex+1)
    for (let i = 0; i < daysAfter.length; i++) {
        if(daysAfter[i] > largest) {
            largest = daysAfter[i]
        }
    }
    const difference = largest - smallest
    if(difference > 0) {
        return difference
    } else {
        return 0
    }
}




function maxProfit(array) {
    let smallest = array[0];
    let maxChange = 0;

    for(let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
        let change = array[i] - smallest;
        if(change > maxChange) {
            maxChange = change
        }
    }

    return maxChange
}

function bestBuyAndSell(week){
    let biggestSale = 0;
    for(let i = 0; i < week.length - 1; i++) {
        for(let j = i+1; j < week.length; j++) {
            let cost = week[i] - week[j];
            if(cost < biggestSale) {
                biggestSale = cost
            }
        }
    }
    return Math.abs(biggestSale);
}

console.log(maxProfit([7, 1, 5, 3, 6])); // 5 - buy at 1, sell at 6
console.log(maxProfit([7, 6, 5, 4, 3])); // 0 - don't buy!
console.log(maxProfit([])); // 0