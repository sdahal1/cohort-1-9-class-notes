/*
We will demonstrate the following built in array methods
    .find() 
    .filter()
    .map()
    .some()
    .every()


    
    */
   const employees = [
       {
           name: "Lebron James",
           salary: 110000,
           company: {
               name: "Google",
               city: "Reston",
               state: "Virginia",
           },
           languages: ["Javascript", "Java", "Python"],
       },
       {
           name: "Scooby Doo",
           salary: 200000,
           company: {
               name: "GreenChef",
               city: "New York City",
               state: "New York",
           },
           languages: ["Html", "Css"],
       },
       {
           name: "Larry David",
           salary: 80000,
           company: {
               name: "Comedy Central",
               city: "Los Angeles",
               state: "California",
           },
           languages: ["Javascript", "Java", "Python"],
       },
       {
           name: "Beyonce",
           salary: 90000,
           company: {
               name: "Google",
               city: "Brooklyn",
               state: "New York",
           },
           languages: ["Javascript", "Java", "Python"],
       }
   ];
   
//.find() -> it returns the first item that matches a given condition, even if more than one item matches. If there is no match, find() returns undefined.
//find an employee who is named "Larry David"
function findEmployeeByName(employees=[], name){
    let found = employees.find((employeeObj)=>{
        return employeeObj.name === name
    })

    return found;
}


// console.log(findEmployeeByName(employees,"Larry David"))
// console.log(findEmployeeByName(employees,"Gary the Snail"))




//.filter() -> This method builds a new array of only the items that match a certain condition.
//get all the employees who are making over a given amount
function findHighEarners(employees, amount){
    return employees.filter((employeeObj)=>{
        return employeeObj.salary > amount;
    })
}


// console.log(findHighEarners(employees,100000));



//.map() -> this code processes each item in the array and creates a new value for each item in the original array. Each item in the original array maps to an item in the new array.
//give back a new array containing only the company names and city for each employee in the given list
function findCompanyNamesAndCity(employees=[]){
    const result = employees.map((employeeObj)=>{
        return {companyName: employeeObj.company.name, city: employeeObj.company.city}
    })
    return result;
}


// console.log(findCompanyNamesAndCity(employees))








//.some() -> The some() method accepts a callback function that implements a comparison that is executed for each item in the array, similar to the previous methods. If the callback function returns true for any item in the array, then the entire some() method returns true.
//use .some() to check if any employees are from a company with the name "Comedy Central"
function doesCompanyHaveEmployee(employees, companyName){
    return employees.some((employeeObj)=>{
        return employeeObj.company.name === companyName
    })
}

// console.log(doesCompanyHaveEmployee(employees,"Comedy Central"))




//.every() ->The every() method works by checking the condition given against every item in the array. If that condition ever fails, it will return false. Otherwise, it will return true.
//use .every() to indicate whether every employee is making over a certain salary
function areAllEmployeesGettingPaidGivenAmount(employees, amount){
    return employees.every((employeeObj)=>{
        return employeeObj.salary >= amount;
    })
}


console.log(areAllEmployeesGettingPaidGivenAmount(employees,150000))



/* You can also combine the built in array methods!! */

/* Use filter() and map() to give back a new array containing only the company names and city for each employee in the given list who have a salary greater than or equal to a given amount

Hint: use .filter() to get back only the employees who make a given amount or more, then use .map to transform that data to a new array containing the company names and city of those employees
*/

function getHighEarningCompanies(employees=[], amount){
    //first get all the high earning employees
    let highEarners=  employees.filter((employeeObj)=>{
        return employeeObj.salary > amount;
    })

    return highEarners.map((employeeObj)=>{
        return {city: employeeObj.company.city, companyName: employeeObj.company.name}
    })
    //extract only the company name and city from the high earning employees
}


console.log(getHighEarningCompanies(employees, 100000))




/* Use filter() and some() method to find if any employee from a given state has a salary of over a given amount */


function areAnyEmployeesFromGivenStateMakingOverGivenAmount(employees, amount, state){
    //get all the employees from given state
    let employeesFromState = employees.filter(employeeObj=>employeeObj.company.state === state)

    return employeesFromState.some(employeeObj=>employeeObj.salary > amount);
}


console.log(areAnyEmployeesFromGivenStateMakingOverGivenAmount(employees, 100000, "California"))






