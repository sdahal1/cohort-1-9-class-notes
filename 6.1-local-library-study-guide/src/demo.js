/* 

*/

const courses = require("../data/courses");
const instructors = require("../data/instructors");
const students = require("../data/students");

//1. Get Total courses count
function getTotalCoursesCount(courses) {
    return courses.length;
}

// console.log(getTotalCoursesCount(courses))

//2. Get Total accounts count
function getTotalAccountsCount(accounts) {
    return accounts.length;
}

//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id
function findInstructorById(instructors, id) {
    return instructors.find((instructor) => instructor.id === id);
}

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id
function findCourseById(courses, id) {
    return courses.find((course) => course.id === id);
}

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students, id) {
    return students.find((student) => student.id === id);
}

//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students) {
    students.sort((studentA, studentB) => {
        return studentA.name.first.toLowerCase() <
            studentB.name.first.toLowerCase()
            ? -1
            : 1;
    });
    return students;
}

//7. Partition courses by student on pace
//find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace

function partitionCoursesByStudentProgress(courses) {
    //get list of courses where everyone is on pace
    let onPaceCourses = courses.filter((course) => {
        let areAllStudentsPassing = course.roster.every((student) => {
            return student.onPace === true;
        });
        return areAllStudentsPassing;
    });

    let notOnPaceCourses = courses.filter((course) => {
        let areAnyStudentsBehind = course.roster.some((student) => {
            return student.onPace === false;
        });
        return areAnyStudentsBehind;
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

function getStudentsForCourse(course, students) {
    let rosterList = course.roster;

    let rosterStudents = rosterList.map((rosterObj) => {
        let foundStudent = students.find(
            (student) => student.id === rosterObj.studentId
        );
        foundStudent.onPace = rosterObj.onPace;
        return foundStudent;
    });

    return rosterStudents.slice(0, 10);
}

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
            studentId: 2,
            onPace: false,
        },
        {
            studentId: 3,
            onPace: true,
        },
        {
            studentId: 4,
            onPace: true,
        },
        {
            studentId: 5,
            onPace: true,
        },
    ],
};

// console.log(getStudentsForCourse(oneCourse, students))

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

function getTotalNumberOfClassesEnrolledIn(student, courses) {
    const { id } = student;
    // let count = 0;
    // courses.forEach(course=>{
    //   course.roster.forEach(enrolledStudent=>{
    //     if(enrolledStudent.studentId === id){
    //       count++
    //     }
    //   })
    // })
    // console.log("count is-->", count)
    // return count;

    return courses.reduce((count, course) => {
        let isStudentEnrolled = course.roster.some((enrollee) => {
            return enrollee.studentId === id;
        });
        if (isStudentEnrolled === true) {
            count++;
        }

        return count;
    }, 0);
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

// console.log(getTotalNumberOfClassesEnrolledIn(student1, courses));

/* 
10- Given a student object, an array of course objects and an array of authors objects-> give back all the course objects including the instructor information embedded into the course object for the courses the student is enrolled in



*/

function getCoursesStudentEnrolledIn(student, courses, instructors) {
    //first find all the courses the student is enrolled in
    const { id } = student;
    let enrolledCourses = courses.filter((course) => {
        //check if the course.rosters list has any student who'se id === the given student id
        let doesStudentTakeThisCourse = course.roster.some((enrollee) => {
            return enrollee.studentId === id;
        });

        return doesStudentTakeThisCourse;
    });
    //then of those courses, for each course find the instructor for that course and give back an array of courses with the instructor embedded into the course object
    let result = enrolledCourses.map((course) => {
        //find the author object for this course's author id
        let matchingInstructor = instructors.find(
            (instructor) => instructor.id === course.instructorId
        );

        course.instructor = matchingInstructor;

        return course;
    });

    return result;
}

// console.log(getCoursesStudentEnrolledIn(student1, courses, instructors));

/*
11. Get count of courses who have at least on student not onPace- similar to getBooksBorrowedCount(books)
*/

function getCoursesNotOnPaceCount(courses) {
    return courses.reduce((count, courseObj) => {
        let anyBodyNotOnPace = courseObj.roster.some(
            (enrollee) => enrollee.onPace === false
        );

        if (anyBodyNotOnPace) {
            count++;
        }
        return count;
    }, 0);
}

// console.log(getCoursesNotOnPaceCount(courses));

/* 
12. Get most common course categories. Output in this format:

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]

*/

const getMostCommonCategories = (courses) => {
    let popularCategories = {};
    courses.forEach((course) => {
        if (course.category in popularCategories) {
            popularCategories[course.category]++;
        } else {
            popularCategories[course.category] = 1;
        }
    });

    let result = Object.keys(popularCategories).map((categoryName) => {
        return { name: categoryName, count: popularCategories[categoryName] };
    });

    result.sort((a, b) => {
        return b.count - a.count;
    });

    return result.slice(0, 2);
};

// console.log(getMostCommonCategories(courses));

/* 
13. Get most popular courses- find the top 3 largest courses based on roster size


Output in this format: 
[
  { name: 'Javascript Fundamentals', rosterSize: 5 },
  { name: 'Bread And Cheddar- The Fundamentals', rosterSize: 4 },
  { name: 'Python Fundamentals', rosterSize: 3 }
]
*/

function getMostPopularCourses(courses) {
    //find the most pop

    return courses
        .sort((a, b) => {
            return b.roster.length - a.roster.length;
        })
        .map((course) => {
            return { name: course.name, rosterSize: course.roster.length };
        });
}

// console.log(getMostPopularCourses(courses));

/* 

14. Get instructors of largest classes.

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function instructorsOfLargestClasses(courses, instructors) {
    let twoLargestCourses = courses
        .sort((a, b) => {
            return b.roster.length - a.roster.length;
        })
        .slice(0, 2);

    return twoLargestCourses.map((course) => {
        let instructorForCourse = instructors.find(
            (instructor) => instructor.id === course.instructorId
        );

        let fullName = helperJoinFirstAndLastNames(
            instructorForCourse.name.first,
            instructorForCourse.name.last
        );

        return { name: fullName, numStudents: course.roster.length };
    });
}

function helperJoinFirstAndLastNames(first, last) {
    return `${first} ${last}`;
}

// console.log(getMostBusyInstructors(courses, instructors));

