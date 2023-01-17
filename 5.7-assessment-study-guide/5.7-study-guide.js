const books = [
    {
        id: 1,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        publisher: { 
            name: "Simon & Schuster",
            state: "Maryland" 
        },
    },
    {
        id: 2,
        title: "How to win friends and influence People",
        author: "Dale Carnegie",
        publisher: { 
            name: "Simon & Schuster",
            state: "Maryland" 
        },
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        publisher: { 
            name: "Warner Books",
            state: "California" 
        },
    },
    {
        id: 4,
        title: "Atomic Habits",
        author: "James Clear",
        publisher: { 
            name: "Penguin Books",
            state: "Maryland" 
        },
    },
];

const students = {
    "Lebron": {
        finished: [1,2],
        notFinished: [3,4],
    },
    "Steph": {
        finished: [1,3],
        notFinished: [2,4],
    },
    "Jessie": {
        finished: [1,3,4],
        notFinished: [2],
    }
};


/* 
.find() 
    - callback function parameters -> 1st param: each element, 2nd param: index of each element
    - callback returns a boolean
    - does not modify original array -> store output in variable
    - outputs first element that the callback returned true for 
.filter() 
    - callback function parameters -> 1st param: each element, 2nd param: index of each element
    - callback returns a boolean
    - does not modify original array -> store output in variable
    - outputs an array containing matching elements
.map()
    - callback function parameters -> 1st param: each element, 2nd param: index of each element
    - callback returns whatever you want to put into the result array
    - does not modify original array -> store output in variable
    - outputs an array containing whatever you returned in the callback
.some()
.every()


.reduce()
.sort()





*/

/*
1. Get books by publisher name
*/

function getBooksByPublisherName(books=[], publisherName){
    const result =  books.filter((bookObj, idx)=>{
        //return boolean
        return bookObj.publisher.name === publisherName
    })
    return result;
}

// console.log(getBooksByPublisherName(books, "Simon & Schuster"));


/* 
2. Get a students finished books

Write a function that takes an array of books, object containing all students, and a student name.
It will return an array of book objects that represent the books that the given user has finished.
*/

function getStudentsFinishedBooks(books = [], students = {}, studentName=""){
    //look at the object where the key matches the given studentName
    const finishedBooks = students[studentName].finished
    //of that object look at the finished property to get an array of book ids
    //eg. [1,3] -> find in the books data set objects with matchign ids from the finishedBooks array
    let result = finishedBooks.map((bookIdElement)=>{
        console.log('bookIdelement', bookIdElement)
        // from the books array, find the element whose id === bookIdElement
        let matchingBook = books.find((bookObj)=>{
            return bookObj.id === bookIdElement
        })
        return matchingBook
    })

    return result;
}

// console.log(getStudentsFinishedBooks(books, students, "Lebron"))
// console.log(getStudentsFinishedBooks(books, students, "Steph"))




/* 
3. Find if a given student has read all the books from a given publisher. Return true or false

Function inputs: list of books, object containing all students, publisher name, student name

*/

function hasStudentReadAllFromPublisher(books=[], students={}, publisherName, studentName){
    //look at students object at the key representing the studentName at the finishedProperty to get the array of bookIds
    const finishedBooks = students[studentName].finished
    //look at only books from publisherName-> filter to get the data set containing only books from given publisherName
    const booksFromPublisher =  books.filter((bookObj, idx)=>{
        //return boolean
        return bookObj.publisher.name === publisherName
    })


    //check if every finishedbook id is in the filtered list of books from given publisher
    let result = booksFromPublisher.every((bookObj)=>{
        return finishedBooks.includes(bookObj.id)
    })

    return result;
}

console.log(hasStudentReadAllFromPublisher(books,students,"Simon & Schuster", "Steph"))




