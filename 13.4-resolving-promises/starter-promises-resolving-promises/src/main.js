const { welcome, goodbye, tell } = require("../utils/fortune-teller");

//THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS!!!

const question = "Is today gonna be a good day?"

let messageHistory = [];

welcome()
    .then((welcomeMsg)=>{
        console.log(welcomeMsg)
        messageHistory.push(welcomeMsg);
    })
    .then(()=>{
        return tell(question)
    })
    .then((fortuneMsg)=>{
        console.log("Your question was", question);
        console.log("Fortune teller said", fortuneMsg);
        messageHistory.push(`Your question was: ${question}`)
        messageHistory.push(fortuneMsg)
    })
    .catch((rejectMsg)=>{
        console.log(rejectMsg);
        messageHistory.push(rejectMsg);
    })
    .then(()=>{
        return goodbye()
    })
    .then((goodbyeMsg)=>{
        console.log(goodbyeMsg)
        messageHistory.push(goodbyeMsg);
    })
    .then(()=>{
        console.log(messageHistory)
    })


// console.log("load up the side bar");
