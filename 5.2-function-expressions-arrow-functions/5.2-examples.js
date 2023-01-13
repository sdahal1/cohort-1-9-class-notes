// Function declaration

const park1 = {
    name: "La Jolla Park",
    rating: 5,
};

//function declaration
function ratingAsText(park) {
    console.log("This is a function declaration.");
    return park.rating > 4 ? "Excellent!" : "Good";
}

// console.log(ratingAsText(park1));

//function expresssion -> writing a function using a variable
const ratingAsText2 = function (park) {
    console.log("This is a function expression.");
    return park.rating > 4 ? "Excellent!" : "Good";
};

//arrow function
const ratingAsText3 = (park) => {
    console.log("This is an arrow function.");
    return park.rating > 4 ? "Excellent!" : "Good";
};

// console.log(ratingAsText3(park1));

const location = {
    name: "Arches",
    state: "Utah",
    geo: {
        lat: 38.68,
        lon: -109.57,
    },
};


//if you only have one parameter, you don't need ()
const getLocationState = location => {
    return location.state;
};


const getLocationStateTwoParameters = (location,x) => {
    return location.state;
};

const getLocationStateNoParameters = () => {
    return "default location is San Diego"
};
//implicit return -> if you only have one line of code in the function body, and that one line is a return statement, you can omit the {} and the "return" word
const getLocationState2 = location => location.state;


console.log(getLocationState2(location))




// Function declaration
function getLocationCoordinates({ geo: { lat, lon } }, zoom = 10) {
    return `https://www.google.com/maps/@${lat},${lon},${zoom}z`;
}


//convert to arrow

const getLocationCoordinates2 = ({ geo: { lat, lon } }, zoom = 10) =>  `https://www.google.com/maps/@${lat},${lon},${zoom}z`;



console.log(getLocationCoordinates2(location, 10))