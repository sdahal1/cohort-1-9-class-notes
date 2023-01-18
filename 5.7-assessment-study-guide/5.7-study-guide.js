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
    },
    "Kevin": {
        finished: [10,30,40],
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
    - callback function parameters -> 1st param: each element, 2nd param: index of each element
    - callback returns a boolean
    - does not modify original array -> store output in variable
    - outputs true if any of the iterations in the .some() callback fn return true. 
.every()
    - callback function parameters -> 1st param: each element, 2nd param: index of each element
    - callback returns a boolean
    - does not modify original array -> store output in variable
    - outputs true if ALL of the iterations in the .every() callback fn return true. Outputs false if even one of the callback functions iterations return false


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

// console.log(hasStudentReadAllFromPublisher(books,students,"Simon & Schuster", "Steph"))





/* 
4. Given an object containing all students, and two student names, determine if the first student has read any books that the second student has not read yet. If so, return true. If the first student has not read any books the second student has not read, return false.

*/

function hasFirstStudentReadSecondStudentsNotReadBooks(students={}, studentName1="", studentName2=""){
    //look at and remember students object at the studentName1's finished list  [1]
    const student1FinishedList = students[studentName1].finished;
    //look at students object at the studentName2's notFinished list [3,4]
    const student2UnfinishedList = students[studentName2].notFinished;

    //if any numbers from the student1finishedList is on the student2UnfinishedList, then return true, else return false
    const result = student1FinishedList.some((bookId)=>{
        //need to return a boolean here
        return student2UnfinishedList.includes(bookId);
    })

    return result
}


// console.log(hasFirstStudentReadSecondStudentsNotReadBooks(students, "Steph", "Lebron"))



/* 
5. Return all the student names who have read any book in the given student's notFinished books

Inputs: object of students, student name

*/


function something(students={}, studentName=""){
    //look at the given studentName's not finished books -> eg. [3,4]
    const givenStudentUnfinishedList = students[studentName].notFinished;
    let resultNames = [];
    //look at every key value pair in our object students
    for(let studentNameKey in students){
        // console.log(studentNameKey) //keys in students
        // console.log(students[studentNameKey]) //values in students
        //peep the finished property of each student in the iteration
        if(studentNameKey !== studentName){
        
            //checking IF is the name I want to compare to vs ignoring it
            const currentStudentsFinishedList = students[studentNameKey].finished
    
            //check if the currentStudents finishedArray includes any number from the givenStudents not finished books. if they are then put the students name as a part of the final result of names
            const hasCurrentStudentFinished = givenStudentUnfinishedList.some((bookId)=>{
                //need to return a boolean here
                return currentStudentsFinishedList.includes(bookId);
            })
    
            console.log(studentNameKey, hasCurrentStudentFinished)
    
            //if hasStudentFinished is true, then make the student name part of our result
            if(hasCurrentStudentFinished){
                resultNames.push(studentNameKey)
            }
            
        }
    }

    return resultNames
}

console.log(something(students,"Lebron"))


