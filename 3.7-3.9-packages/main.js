const moment = require("moment")
const faker = require('faker');

function sayHi(name){
    let currentTime = Date.now()
    console.log(`Hi ${name}, it is currently ${moment().format('MMMM Do, YYYY h:mm:SS ')}`)
}


// sayHi("Rob");
// sayHi("Kobe");
// sayHi("Lebron");



function generateTeam(){
    let randomTeam = {
        city: faker.address.city(),
        name: faker.company.companyName(),
        teamColor1: faker.commerce.color(),
        teamColor2: faker.commerce.color()
    }
    //fake name
    //fake city
    //fake teamColor1
    //fake taeamColor2
    return randomTeam
}

console.log(generateTeam());