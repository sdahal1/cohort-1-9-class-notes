//build a function that takes in a number of scores that students received on an exam, and returns the student who received the highest score.

let data = [
    { name: "Shane Carey", score: 9.5 },
    { name: "Rebecca Mills", score: 8.7 },
    { name: "Lebron", score: 10.0 },
];

//expected output
// { name: "Shane Carey", score: 9.5 }

function highestScore(students=[]){
    if(students.length === 0) return null;
    students.sort((a,b)=>{
        return b.score - a.score
    })

    return students[0];
}


//tests for the function are here
if(typeof highestScore === "function"){
    console.log("test passed");
}else{
    console.log("highestScore() is not a function.");
}

//testing for the happy path
const expected = data[2];
const actual = highestScore(data)

if (expected.name === actual.name && expected.score === actual.score) {
    console.log("Test passed.");
} else {
    console.log(
        "highestScore() did not return the student with the highest score."
        );
    }
    
    
//testing for edge case
const expectedEdgeCase = null
const actualEdgeCase = highestScore([])

//edge case when data set is empty or undefined
if (expectedEdgeCase === actualEdgeCase ) {
    console.log("Test passed.");
  } else {
    console.log(
      `highestScore() did not return null for an empty data set. Got this instead ${actualEdgeCase}.`
    );
}