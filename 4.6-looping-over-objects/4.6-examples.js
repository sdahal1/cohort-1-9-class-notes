/* For loops- use it when you know how many iterations you'll need */
for (let i=0; i<=10; i++) {
    // console.log(`iteration ${i}`);
}

//log all even numbers starting at 2






/* for-of loops-> use it when you want to iterate over an array fully */
let nums = [23,24,3,8,77,6];

//loop through an array using an iterator
for(let i=nums.length-1; i>=0; i--){
  // console.log(nums[i])
  // if(nums[i] === 8) nums[i] = "Kobe!"
}

//for of loop to loop through an array
let index = 0;
for(let element of nums){
  // console.log(element)
  if(element === 8) nums[index] = "Kobe!";
  index++
}

// console.log(nums)


let teams = [
    {
      name: "Lakers",
      city: "Los Angeles",
      players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
      championships: 20
    },
    {
      name: "Warriors",
      city: "San Franscisco",
      players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
      championships: 5
    },
    {
      name: "Knicks",
      city: "New York",
      players: ["Carmelo", "Marbury"],
      championships: 3
  
    },
    {
      name: "Nets",
      city: "New York",
      players: ["Vince Carter", "Kevin Durant"],
      championships: 0
    }
]


for(let team of teams){ //for of on array gets each element
  console.log(team)
}


for(let idx in nums){ //for in on array gets each index
  console.log(idx)
  if(nums[idx] === 8) nums[idx] = "Kobe!";
}

console.log(nums)




/* for-in loops-> use it to loop over the keys of objects */
const people = {
    "Lee Finch": { address: "913 Hunts Lane", isCustomer: true },
    rob: {address: "100 keep it 100 way", isCustomer: true},
    "Whitney Shawna": { address: "392 Norfolk Street", isCustomer: false },
    "Gabrielle Mayo": { address: "934 Engert Avenue", isCustomer: false },
};


for(let key in people){
  // console.log(key)
  const address = people[key] //each value at the given key
  // console.log(`Sending mail to ${key} at ${JSON.stringify(address)}.`);
}

//console.log(Object.keys(people)) //returns back an array of the keys form the specified object
//console.log(Object.values(people)) //returns back an array of the values form the specified object

const keys = Object.keys(people);

for(let name of keys){
  // console.log(name)
  // console.log(people[name]) // people['Lee Finch']
  //console.log(people['name']) // people['Lee Finch']

}


// console.log(people["rob"])
// console.log(people["Gabrielle Mayo"])
// console.log(people["Lebron"])










/* Transforming objects into arrays using Object.values() or Object.keys() */

