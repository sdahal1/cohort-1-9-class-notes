function indexOf(array, isMatch) {
    for (let i = 0; i < array.length; i++) {
        if (isMatch(array[i], i, array)) {
            return i;
        }  
    }
    return -1;
}

let x = [
    {name: "Chantelle", hobby: "making decadent meals"},
    {name: "Kevin", hobby: "creating wonderful works of art"},
    {name: "Ryan", hobby: "famous twitch streamer"}
]



console.log(indexOf(x, (value, index, arr) => value.name === "Chantelle" ));
console.log(indexOf(x, (value, index, arr) => value.hobby === "creating wonderful works of art" ));


