// Given an array of numbers, find the largest product formed by two of the numbers. For example, 
// if the input array is [1, 5, 3, 4, 2], the largest product that can be formed by two of the numbers is 20, 
// which is the product of 5 and 4. Can you write code to solve this problem?

// [-6,-6]
// ["a", [],1,2]
// []

// if has no numbers error or skip
//loop thru array an take first el and look at every other nums in pairs
//in second loop multiply and keep track of which product is higher

function interview(arr) {
    let product = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let total = arr[i] * arr[j];
        if (total > product) {
          product = total;
        }
      }
    }
    return product;
  }
  
  console.log(interview(x));
  
  // array.sort((a,b)=>{b-a}) // o(n logn)
  
  // return array[0]*array[1]
  
  function largestProduct(array) {
    const n = array.length;
    if (n < 2) {
      throw new Error('Array too small');
    }
    
    array.sort((a, b) => a - b);
    const maxProduct1 = array[0] * array[1];
    const maxProduct2 = array[n-1] * array[n-2];
    return Math.max(maxProduct1, maxProduct2);
  }
  
  function maxProduct(array) {
    let num1 = 0;
    let num2 = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > num1) {
        num2 = num1;
        num1 = array[i];
      } else if (array[i] > num2) {
        num2 = array[i];
      }
    }
    console.log("num1", num1);
    console.log("num2", num2);
    return num1 * num2;
  }
  
  // [-6,-6,0,1,2]
  // [2,1,0,-6,-6]
  
  // R - Repeat problem
  // E - Example input/output
  // A - Approach
  // C - Coding
  // T - Testing/Code review
  // O - Follow-up questions