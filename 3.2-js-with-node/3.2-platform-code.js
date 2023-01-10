console.log("running this file!");


function identifyPlant(plant) {
    console.log("inside function")
    return "This is a " + plant.name + " plant!";
}
  
let plant1 = { name: "Coleus" };
let plant2 = { name: "Cactus" };
let plant3 = { name: "Money tree" };


//the value of a function call is whatever that function call returns!!
console.log(identifyPlant(plant1))
console.log(identifyPlant(plant2))
console.log(identifyPlant(plant3))
