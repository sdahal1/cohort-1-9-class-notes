/*
1. 


Given an array of Food items, print each item using forEach
["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"]

*/

const randomFood = ["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"];

randomFood.forEach((food)=>{
    // console.log(food)
})


/*
2. use foreach() to loop through an array of objects and show their details- first just the name, then a whole description 
*/

const rappers = [
  {
    name: "Drake",
    fireLevel: "10",
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: "10",
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: "7",
    moneyEarnedFromRapping: -50
  }
];

rappers.forEach((rapperObj)=>{
    const {name, moneyEarnedFromRapping, fireLevel} = rapperObj
    console.log(`The rapper ${name} ${moneyEarnedFromRapping>0? "Earned": "Lost"} ${moneyEarnedFromRapping} and has a fire level of ${fireLevel} `)
    return "data"
})




/* 
rappers.forEach(({name, moneyEarnedFromRapping, fireLevel})=>{
    console.log(`The rapper ${name} earned/lost ${moneyEarnedFromRapping} and has a fire level of ${fireLevel} )
})

*/


/*


3. use forEach to add up the fireLevels of the artists above and give back the totalfire and averageFire

*/

let totalFire = 0

rappers.forEach((rapperObj)=>{
    totalFire += parseInt(rapperObj.fireLevel);
})

console.log(totalFire);
let averageFire = totalFire/rappers.length;
console.log(averageFire)


/*
4. use forEach to build a statement from given data above "My top rappers list are: Drake, Lupe Fiasco, Rob D, and they are all fuego.
*/

let resultString = "My top rappers list are: "
rappers.forEach((rapperObj,idx)=>{
    resultString += `${rapperObj.name} (idx: ${idx}), `
})
resultString+= 'and they are all fuego.'



console.log(resultString)
/*
5. use forEach to log the moneyEarnedFromRapping for each artist above and format using the dollar sign to show amount in dollars

*/


rappers.forEach((rapperObj)=>{
    console.log(`$${rapperObj.moneyEarnedFromRapping.toFixed(2)}`)
})





