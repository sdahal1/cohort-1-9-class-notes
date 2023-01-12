const authors = [
    {
        id: 1,
        name: {
            firstName: "Philip",
            surname: "Pullman",
        },
        series: ["His Dark Materials", "Sally Lockhart"],
    },
    {
        id: 2,
        name: {
            firstName: "Terry",
            lastName: "Pratchett",
        },
        series: ["Discworld", "Long Earth"],
    },
];

/* 
To make code more readable:
1. Add default parameters
2. Declare variables to reference data that references other data
*/

function getAllSeries(authors = []) {
    const result = [];
    for (let i = 0; i < authors.length; i++) {
        const currentAuthor = authors[i];
        for (let j = 0; j < currentAuthor.series.length; j++) {
            const currentSeriesName = currentAuthor.series[j];
            result.push(currentSeriesName);
        }
    }
    return result;
}

// console.log(getAllSeries(authors))

//falsy values in js-> 

function getSeriesListById(authors=[], id=null) {
    let selected = null;
    if(!id) return "No ID provided";

    if(authors.length === 0) return "No authors in list"


    for (let i = 0; i < authors.length; i++) {
        const author = authors[i];
        //check if the current author's id in the iteration is equal to the given parameter id
        if (author.id === id) selected = author;
        
    }
    
    if (selected) {
        const message = `Series list: ${selected.series.join(", ")}`;
        return message;
    } else {
        return [];
    }
    
}


console.log(getSeriesListById(authors, 2))