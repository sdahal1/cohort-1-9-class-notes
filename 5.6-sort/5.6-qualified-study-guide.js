/* 
const parks = [
  { name: "Biscayne", rating: 4.2 },
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
  { name: "Indiana Dunes", rating: 4.1 },
];


example: parks.sort((parkA, parkB)=>{
    return parkB.rating - parkA.rating
})
If the number returned is negative, the first item (parkA) will be moved before the second item (parkB). The opposite is true if the number is positive. This iteration then continues, but with the second and third items. 




*/

/* Example 1: sorting numbers- given an array of numbers */
const nums = [23,4,12,77,-3,4,-5,1]

//Ascending (least to greatest)
nums.sort((elemA, elemB)=>{
    //if negative number returned-> puts elemA before elemB
    //if positive number returned-> puts elemB before elemA
    //if 0 returned-> does not move them
    return elemA-elemB;
})



//Descending example here -> Baaaaaaaaaaa
nums.sort((elemA, elemB)=>{
    return elemB-elemA;
})
// console.log(nums)

/* Example 2: sorting numbers- given an array of objects */
const parks = [
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
  ];

//ascending
parks.sort((parkA, parkB)=>{
    return parkA.rating - parkB.rating
})

//descending
parks.sort((parkA, parkB)=>{
    return parkB.rating - parkA.rating
})

// console.log(parks)

/* Example 3: Sorting strings */

//alphabetical order
parks.sort((a,b)=>{
    if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -1
    }else{
        return 1
    }
    // a.name - b.name
})


//zalphabetical order (opposite of alphabetical-> not sure if zalphabetical is a word tho)
parks.sort((a,b)=>{
    // if(a.name.toLowerCase() < b.name.toLowerCase()){
    //     return 1
    // }else{
    //     return -1
    // }

    //without the if else -> using a ternary operator
    return a.name.toLowerCase() < b.name.toLowerCase() ? 1: -1
    // a.name - b.name
})




/* Example 4: Sort strings by length */

parks.sort((a,b)=>{
    return a.name.length - b.name.length
})

console.log(parks)