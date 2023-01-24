//Object

function getRandomQuote(person={}) {
   //happy path first
   const {quotes} = person;
   //random num between 0-5 (excluding 5)
   try{
       const randomIndex = Math.floor(Math.random() * quotes.length) //0, --- 0.3 0.45 ---4.9999999
       return quotes[randomIndex]
   }catch(error){
        console.log("Person had no quotes");
        return "No Quotes Found"
   }

}

const person1 = {
    name: "Michael Scott",
    quotes: [
        "An office is not for dying. An office is a place for living life to the fullest, to the max, to… an office is a place where dreams come true.",
        "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way.",
        "Do I have a special someone? Well, yeah, of course. A bunch of 'em. My employees.",
        "I love inside jokes. I hope to be a part of one someday.",
        "I'm an early bird and I'm a night owl so I'm wise and I have worms.",
    ],
    company: "Dunder Mifflin"
};


const person2 = {
    name: "Dwight Schrute",
    quotes: null,
    company: "Dunder Mifflin"
}



// console.log(getRandomQuote(person1));
// console.log(getRandomQuote(person2));
console.log(getRandomQuote());








