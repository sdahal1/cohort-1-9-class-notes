//Try catch allows us to try risky operations and if an error is thrown, we can still keep our app running and handle the error that was thrown. This helps us to keep our app from crashing when it encounters a thrown error



let guess = 5;
let actual = 7;

//try block is for code that is "risky" and might throw an error, or it might not throw an error
try{
    if(guess !== actual){
        throw {message: "wrong", code: "guess", numTimesGuess: 2}
    }else{
        console.log("good guess, you win!")
    }
}catch(error){
    console.log("Something went wrong with your gues")
    console.log(error)
}


console.log("server still up")




function getRandomNumber() {
    // Math.floor(Math.random() * 100) generates a random number
    const randomNumber = Math.floor(Math.random() * 100);
    const min = 10;
    try {
      if (randomNumber < min) {
        throw `Random number is too small! ${randomNumber} is less than ${min}.`;
      } else {
        console.log(`The random number is: ${randomNumber}`);
      }
    } catch (error) {
      console.log(`An error occurred: ${error}`);
    }
}

getRandomNumber()