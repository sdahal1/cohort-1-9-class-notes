const title = "Infernal Devices";
const author = "K.W. Jeter";
let numPages = 190;



/* Object shorthand */
//{title: "Infernal devices", author: "K.w jeter", number_of_pages: 190}

// const bookObj = {title: title, author: author} 
const bookObj = {title, author, number_of_pages: numPages} 
// console.log(bookObj)

// numPages = 2000

const ownedBooks = ["Infernal Devices", "Foundation"];
const wishlist = ["Good Omens", "Guards! Guards!"];


const [...ownedBooksCopy] = ownedBooks;

ownedBooks[1] = "Foundations of Javascript"
// console.log(ownedBooks)
// console.log(ownedBooksCopy)


const allbooks = [...ownedBooks, ...wishlist];

// console.log(allbooks)



const salesTax = { state: "Washington", tax: 0.065 };

// const salesTaxCopy = {...salesTax}
const {...salesTaxCopy} = salesTax


salesTax.state = "Cali"

console.log(salesTax)
console.log(salesTaxCopy)


const product = { bookObj, priceInCents: 1950 };
const sale = { ...product, ...salesTax };

console.log(sale)

