/* 

*/

const courses = require("../data/courses");
const instructors = require("../data/instructors");
const students = require("../data/students");

//1. Get Total courses count
function getTotalCoursesCount(courses = []) {
    return courses.length;
}

// console.log(getTotalCoursesCount(courses))

//2. Get Total accounts count
function getTotalAccountsCount(accounts = []) {
    return accounts.length;
}

//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id
function findInstructorById(instructors = [], id) {
    return instructors.find((instructor) => instructor.id === id);
}

// console.log(findInstructorById(instructors,3))

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id
function findCourseById(courses = [], id = null) {
    return courses.find((course) => course.id === id);
}

// console.log(findCourseById(courses,2))

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students = [], id) {
    return students.find((student) => student.id === id);
}
// console.log(findstudentById(students, 2))

//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students = []) {
    const [...studentscopy] = students;
    studentscopy.sort((studentA, studentB) => {
        return studentA.name.first.toLowerCase() <
            studentB.name.first.toLowerCase()
            ? -1
            : 1;
    });

    return studentscopy;
}

// console.log("students outside function", students);
// console.log(sortStudentsByFirstName(students))
// console.log("students outside function", students);

//7. Partition courses by student on pace
//find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace

/* 
output: 
[
    [course3Obj,course4Obj,course5Obj],
    [course1Obj,course2Obj,course6Obj, course7Obj]
]


*/
function partitionCoursesByStudentProgress(courses = []) {
    const onPaceCourses = [];
    const notOnPaceCourses = [];
    //look at each individual courseObj in courses array
    courses.forEach((courseObj) => {
        //for each course, look at the roster property which is another array
        console.log(courseObj.roster);
        //loop through the roster array to look at each rosterObj
        const isCourseOnPace = courseObj.roster.every((rosterObj) => {
            return rosterObj.onPace;
        });

        //if every element in the roster array has a onPace == true, then push the current course object to onPaceCourses, else push to notOnPaceCourses
        if (isCourseOnPace === true) {
            onPaceCourses.push(courseObj);
        } else {
            notOnPaceCourses.push(courseObj);
        }
    });

    return [onPaceCourses, notOnPaceCourses];
}

// console.log(partitionCoursesByStudentProgress(courses))

/* 

8. getStudentsForCourse - Given a course object, for its course roster, return an array of students that match the courses roster list, and add the onPace property from the roster objects to the student object. 

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true
        },
        {
            studentId: 2,
            onPace: false
        },
        {
            studentId: 3,
            onPace: true
        },
        {
            studentId: 4,
            onPace: true
        },
        {
            studentId: 5,
            onPace: true
        }
    ]
}
*/

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true,
        },
        {
            studentId: 4,
            onPace: false,
        },
    ],
};
function getStudentsForCourse(course = {}, students = []) {
    //look at the course obj's roster
    const { roster } = course;
    // const result = []
    // roster.forEach(enrollee=>{
    //     const foundStudent = students.find(student=>{
    //         return student.id === enrollee.studentId
    //     })

    //     foundStudent.onPace = enrollee.onPace;
    //     // console.log(enrollee.studentId, foundStudent)
    //     result.push(foundStudent);
    // })

    // return result

    const result = roster.map((enrollee) => {
        const foundStudent = students.find((student) => {
            return student.id === enrollee.studentId;
        });

        foundStudent.onPace = enrollee.onPace;
        // console.log(enrollee.studentId, foundStudent)
        // result.push(foundStudent);
        return foundStudent;
    });
    return result;
}

// console.log(getStudentsForCourse(oneCourse, students))

// console.log(getStudentsForCourse(oneCourse, students))

/*
[
      {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
        onPace: true
    },
     {
        id: 4,
        name: {
            first: "Spongebob",
            last: "Squarepants"
        },
        onPace: false
    },
]


*/

/* 
9. getTotalNumberOfClassesForStudent- Given a student object and an array of course objects, find the number of times this student object's id appears in the all the courses rosters array

let student1 = {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
    }
*/

function getTotalNumberOfClassesEnrolledIn(student = {}, courses = []) {
    const { id } = student;
    //finalresult counter = 0
    /* 
    let finalCount = 0;
    //look at every course in courses. for each course I want to:
    courses.forEach((currentCourse)=>{
        //check the roster to see how many times the roster contains a student whose id is === id. whenever we find that math, increment finalCount
        const {roster} = currentCourse;
        roster.forEach(enrollee=>{
            if(enrollee.studentId === id){
                finalCount++;
            }
        })
        //add that count to the final result
        
    })
    */

    // the reduce way
    const finalCount = courses.reduce((accumulator, currentCourse) => {
        const { roster } = currentCourse;
        roster.forEach((enrollee) => {
            if (enrollee.studentId === id) {
                accumulator++;
            }
            // enrollee.studentId === id ? accumulator ++ : null
        });

        return accumulator;
    }, 0);

    return finalCount;
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

// console.log(getTotalNumberOfClassesEnrolledIn(student1, courses)); //6

/* 
10- Given a student object, an array of course objects and an array of instructors objects-> give back all the course objects including the instructor information embedded into the course object for the courses the student is enrolled in

[
]

*/

function getCoursesStudentEnrolledIn(
    student = {},
    courses = [],
    instructors = []
) {
    const { id } = student;
    //result array to put data into

    /* 
    const result = [];
    //look at courses dataset, and for each course look at:
    courses.forEach((courseObj)=>{
        const {roster, instructorId} = courseObj;
        //look at every enrollee in the roster to find the the student who matches the givne id
        roster.forEach((enrollee)=>{
            //if the student is found in that roster for that course put that course into our result;
            if(enrollee.studentId === id){
                //find the instructor whose id === thecurrent course's instructorId
                const matchingInstructor = instructors.find(instructor=>{
                    return instructor.id === instructorId
                })
                //embed the instructor to the course
                courseObj.instructor = matchingInstructor;
                result.push(courseObj)
            }
        })
    })
    */

    //look at courses dataset, and for each course look at:
    const result = courses.filter((courseObj) => {
        const { roster, instructorId } = courseObj;
        //look at every enrollee in the roster to find the the student who matches the givne id
        const isStudentInRoster = roster.some((enrollee) => {
            //if the student is found in that roster for that course put that course into our result;
            return enrollee.studentId === id;
        });

        if (isStudentInRoster === true) {
            //find the instructor whose id === thecurrent course's instructorId
            const matchingInstructor = instructors.find((instructor) => {
                return instructor.id === instructorId;
            });
            //embed the instructor to the course
            courseObj.instructor = matchingInstructor;

            return courseObj;
        }
        
    });

    return result;
}

// console.log(getCoursesStudentEnrolledIn(student1, courses, instructors));

/*
11. Get count of courses who have at least on student not onPace- similar to getBooksBorrowedCount(books)

0
*/

function getCoursesNotOnPaceCount(courses=[]) {
    //counter
    // let count = 0;

    // courses.forEach((course)=>{
    //     const {roster} = course;
    //     let isEveryoneOnPace = true;
    //     roster.forEach((enrollee)=>{
    //         if(enrollee.onPace === false) {
    //             isEveryoneOnPace = false; 
    //             return; 
    //         }
    //     })
    //     if(isEveryoneOnPace === false){
    //         count = count + 1
    //     }
    // })


    let count = courses.reduce((accumulator,course)=>{
        const {roster} = course;
        let isEveryoneOnPace = roster.every((enrollee)=>{
            return enrollee.onPace === true;
        })

        if(isEveryoneOnPace === false){
            accumulator++;
        }
        return accumulator;
    },0)
    return count;


    // return courses.reduce((accumulator,{roster})=> roster.every((enrollee)=> enrollee.onPace === true) ? accumulator : ++accumulator,0)


}

// console.log(getCoursesNotOnPaceCount(courses));

/* 
12. Get most common course categories. Output in this format:

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]

//result array
[
    {name: Software engineering, count: 1}
  
]


*/

const getMostCommonCategories = (courses=[]) => {
    //have an array to put things in
    let result = [];

    //look at each course
    courses.forEach((courseObj)=>{
        const {category} = courseObj;
        //check if the result array contains an object with the property name that is equal the current courseObj's category
        let found = result.find(obj=>{
            return obj.name === category;
        })

        //if found is undefined we craete a new object and put it into result
        if(found === undefined){
            let newObj = {name: category, count: 1};
            result.push(newObj);
        }else{
            found.count++;
        }
    })

    return result;
};

// console.log(getMostCommonCategories(courses));

/* 
13. Get most popular courses- find the top 2 largest courses based on roster size


Output in this format: 
[
  { name: 'Javascript Fundamentals', rosterSize: 5 },
  { name: 'Bread And Cheddar- The Fundamentals', rosterSize: 4 }
]



//result
[

    {name: , rosterSize: }
]
*/

function getMostPopularCourses(courses=[]) {
    const result = [];
    courses.forEach(course=>{
        const {name,roster} = course;
        let obj = {name, rosterSize: roster.length};
        result.push(obj);
    })
    
    result.sort((objA, objB)=>{
        return objB.rosterSize - objA.rosterSize;
    })
    // const [first,second] = result
    // return [first,second]

    return result.slice(0,2);
}

// console.log(getMostPopularCourses(courses));

/* 

14. Get instructors of largest two classes.

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function instructorsOfLargestClasses(courses=[], instructors=[]) {
    const result = [];
    courses.forEach(course=>{
        const {roster,instructorId} = course;
        //find the instructor
        const matchingInstructor = findInstructorById(instructors,instructorId);
        const {name:{first,last}} = matchingInstructor
        const formattedname = helperJoinFirstAndLastNames(first, last)
        let obj = {name: formattedname, rosterSize: roster.length};
        result.push(obj);
    })

    result.sort((objA, objB)=>{
        return objB.rosterSize - objA.rosterSize;
    })

    return result.slice(0,2)
}

console.log(instructorsOfLargestClasses(courses, instructors))

function helperJoinFirstAndLastNames(first, last) {
    return `${first} ${last}`;
}

// console.log(getMostBusyInstructors(courses, instructors));
