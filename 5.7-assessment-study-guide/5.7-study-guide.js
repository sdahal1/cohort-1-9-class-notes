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
        finished: [1],
        notFinished: [2,3,4],
    },
    "Jessie": {
        finished: [1,3,4],
        notFinished: [2],
    }
};



/*
1. Get books by publisher name
*/


/* 
2. Get a students finished books

Write a function that takes an array of books, object containing all students, and a student name.
It will return an array of book objects that represent the books that the given user has finished.
*/



/* 
3. Find if a given student has read all the books from a given publisher. Return true or false

Function inputs: list of books, object containing all students, publisher name, student name

*/



/* 
4. Given an object containing all students, and two student names, determine if the first student has read any books that the second student has not read yet. If so, return true. If the first student has not read any books the second student has not read, return false.

*/




/* 
5. Return all the student names who have read any book in the given student's notFinished books

Inputs: object of students, student name

*/
