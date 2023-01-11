const product1 = {
    title: "The Golden Compass",
    priceInCents: 799,
    author: {
      firstName: "Philip",
      surname: "Pullman",
    },
};

const product2 = {
    title: "Lebron Shoes",
    priceInCents: 1000,
    author: {
      firstName: "Nike",
      surname: "Nike tho",
    },
    "two chainz": true
};



function printAuthorAndTitle(product) {
    const {title, author, author: {firstName,surname}, priceInCents:amount, weight, ["two chainz"]: twoChainz} = product;
    // const {property1, property2:{property2sProprety1, property2sProperty2},property3} = objectNameHere
    console.log(author)
    console.log("weight is this", weight)
    console.log("two chains logging", twoChainz)
    return `${title} by ${firstName} ${surname} costs this much: ${amount}`;
}


function printAuthorAndTitleDestructuringParametersExample(product, {title, author, author: {firstName,surname}, priceInCents:amount, weight, ["two chainz"]: twoChainz}=product) {
    console.log("logging product", product)
    // const {title, author, author: {firstName,surname}, priceInCents:amount, weight, ["two chainz"]: twoChainz} = product1;
    // const {property1, property2:{property2sProprety1, property2sProperty2},property3} = objectNameHere
    console.log(author)
    console.log("weight is this", weight)
    console.log("two chains logging", twoChainz)
    return `${title} by ${firstName} ${surname} costs this much: ${amount}`;
}

console.log(printAuthorAndTitleDestructuringParametersExample(product2))
// console.log(printAuthorAndTitle(product2))



const genres = [
    "Fantasy",
    "Fiction",
    "Nonfiction",
    "Science Fiction",
    "Young Adult",
    "Self dev",
    "Finance",
    "Computer Science",
    "History"
];


// const secondItem = genres[1];
// const fourthItem = genres[3];


// const [first, secondItem, three, fourth, iPleadtheFifth] = genres;
const [,secondItem, , fourth, ...restOfGenres] = genres;


console.log(secondItem, fourth, restOfGenres)

