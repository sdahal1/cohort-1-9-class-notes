/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }


   products = [
    {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   },
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   },
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
   ]
*/

const products = [
  {
      name: "Slip Dress",
      priceInCents: 8800,
      availableSizes: [0, 2, 4, 6, 10, 12, 16],
  },
  {
      name: "CD tape",
      priceInCents: 8800,
      availableSizes: [0, 2, 4, 6, 10, 12, 16],
  },
  {
      name: "Video game",
      priceInCents: 8800,
      availableSizes: [0, 2, 4, 6, 10, 12, 16],
  },
];

function listAllItems(products) {
    if (products.length === 0) {
        return "There are no items for sale.";
    } else if (products.length === 1) {
        //get the first item in products
        const firstItem = products[0];

        return `There is 1 item for sale: ${firstItem.name}.`;
    } else if (products.length === 2) {
        const firstItem = products[0];
        const secondItem = products[1];

        return `There are 2 items for sale: ${firstItem.name} and ${secondItem.name}.`;
    } else if (products.length > 2) {
        
        const allNames = getProductNamesOnly(products)

        return `There are 3 items for sale: ${allNames.join(", ")}.`;
    }
}

console.log(listAllItems(products))

function getProductNamesOnly(products) {
    let namesOnly = [];
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        namesOnly.push(product.name);
    }
    return namesOnly;
}


console.log(getProductNamesOnly(products));

module.exports = {
    listAllItems,
};
