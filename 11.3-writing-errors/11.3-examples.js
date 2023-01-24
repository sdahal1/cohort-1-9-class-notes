//Different ways to generate error messages

function one() {
    two();
}

function two() {
    three();
    console.log("number 2!")
}

function three() {
    throw new Error("Here's the error");
}

// one();


let actual_goat = "Lebron";
let markOpinionOnGoat = "Steph"


if(markOpinionOnGoat === actual_goat){
    console.log("Mark that.");
}else{
    // throw new Error("Incorrect Goat Opinion!");
    throw {message: "Incorrect Goat Opinion!", code: "NOTGOAT"}
}
