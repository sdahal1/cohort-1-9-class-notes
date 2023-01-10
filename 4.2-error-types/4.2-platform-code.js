for (let i = 1; i <= 23; i++) {
    if (i === 3) {
        console.log("iverson");
    } else if (i === 8) {
        console.log("Kobe");
    } else if (i === 7) {
        console.log("futból, Ronaldo!");
    } else {
        console.log("who dat", i);
    }
}

let goat = "Lebron";

console.log(goat);

console.log(2 + 2);

function addSalesTax(total, salesTax) {
    let result = total * (1 + salesTax);
    return result;
}

addSalesTax(100, 0.15);

function openInstructions(weather, temperatureInCelsius) {
    if (weather && temperatureInCelsius) {
        if (weather === "sunny") {
            if (temperatureInCelsius > 20) {
                return "Set up the patio and put out umbrellas. Open indoor windows.";
            } else {
                return "Set up the patios, umbrellas optional. Open indoor windows.";
            }
        } else if (weather === "rainy") {
            if (temperatureInCelsius > 10) {
                return "Open indoor windows slightly.";
            } else {
                return "Keep windows closed.";
            }
        }
    } else {
        return "Please set the `weather` and `temperatureInCelsius` variables.";
    }
}

console.log(openInstructions("sunny", 18));


let price = 9.99;
let trimmedPrice = price.toString().trim();
console.log(trimmedPrice)
console.log(price)


function formatPrice(priceInCents) {
    let formattedPrice = "$" + (priceInCents / 100).toFixed(2);
    return formattedPrice;
}

console.log(formatPrice(125))