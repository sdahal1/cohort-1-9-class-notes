function calculatePriceInDollars(priceInCents = 0) {
    //check if priceInCents is a number data type
    if (typeof priceInCents !== "number") {
        console.log("please input a number, for now, we will output 0");
        return 0;
    }
    console.log("priceincents is this", priceInCents);
    return priceInCents / 100;
}

// console.log(calculatePriceInDollars(134))
// console.log(calculatePriceInDollars(248))
// console.log(calculatePriceInDollars())

function calculateTotal(products=[], { discountPercentage=0, salesTax=0 }={}) {
    console.log('products',products)
    console.log('discountpercentage and sales tax',discountPercentage, salesTax)

    let result = 0;
    for (let i = 0; i < products.length; i++) {
        const { priceInCents, quantity } = products[i];
        result += priceInCents * quantity;
    }

    if (discountPercentage) result *= 1 - discountPercentage;
    return result * (1 + salesTax);
}

// Inputs
const clothes = [
    {
        name: "Black Longline T-Shirt",
        priceInCents: 1500,
        size: "M",
        quantity: 2,
    },
    {
        name: "Light Wash Stretch Skinny Jeans",
        priceInCents: 6000,
        size: 32,
        quantity: 1,
    },
];
const options = { discountPercentage: 0.1, salesTax: 0.0825 };

// Function call
//console.log(calculateTotal(products, options)); //> 8768.25
console.log(calculateTotal( )); //> 8768.25


// {
//     name = 'Default user',
//     age = 'N/A'
//   }={}
