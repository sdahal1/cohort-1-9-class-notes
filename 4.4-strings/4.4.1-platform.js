let factualStatement = "Lebron is at least top 2 all time, c'mon now";

console.log(factualStatement.length);

console.log(factualStatement[0]); //first char
console.log(factualStatement[factualStatement.length - 1]); //last char

factualStatement[0] = "h"; //can't do this-> strings are immutable (can't change existing characters)
factualStatement += "!!!!!"; //you CAN add to the end of a string

console.log(factualStatement);

function sentenceCase(sentence) {
    //store the first character in a variable
    const firstCharacter = sentence[0];
    let result = firstCharacter.toUpperCase(); //"H"

    for (let i = 1; i < sentence.length; i++) {
        const character = sentence[i];

        result += character.toLowerCase();
    }
    return result;
}

// console.log(sentenceCase("hi wHATs Up"))//"Hi whats up"
// console.log(sentenceCase("this is THE month of February"))//"Hi whats up"

// "hi wHATs Up"-> "Hi whats up"

let sentence = "hi whats up";
//  0123

// console.log('line 37', sentence.substr(100))

// console.log(sentence.includes("basket")) //true or false

function sentenceCase2(sentence) {
    const first = sentence[0];
    const rest = sentence.substr(1);

    return first.toUpperCase() + rest.toLowerCase();
}

// console.log(sentenceCase2("hEy Hi How YOU Doin"))

//"Red truck blue truck"-> "Red Truck Blue Truck"

const sentence2 = "REd truck blue tRuck";

// const arrayOfWords = sentence2.split(" ");

// console.log(arrayOfWords)

// console.log(arrayOfWords.join("-"))

function titleize(title) {
    const words = title.split(" ");
    console.log(words)
    let result = [];

    for (let i = 0; i < words.length; i++) {
        const capitalized = sentenceCase(words[i]); //the -> The
        result.push(capitalized);
        console.log(result)
    }

    return result.join(" ");
}

console.log(titleize("the light FANTASTIC"));



const title = "Guards! Guards!";
console.log(title.split("!")); //> ?
title.split(""); //> ?
title.split("guards"); //> ?

const titleArr = ["The", "Light", "Fantastic"];
titleArr.join("-"); //> ?
titleArr.join("_-_"); //> ?
titleArr.join(); //> ?




const book = {
    title: "7 habits of highly effective people",
    numPages: 288,
    author: "Stephen Covey"
}


let details = "The book by " + book.author + " i am currently reading is " + book.title + " and it has " + book.numPages + " pages"

console.log(details);

let detailsTemplateLiteral = `The book by ${book.author} i am currently reading is ${book.title} and it has ${book.numPages} pages`

console.log(detailsTemplateLiteral)