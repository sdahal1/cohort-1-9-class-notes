const averageScore= (students=[])=> {
    if(students.length === 0) return 0;

    const total = students.reduce((accumulator, element)=>{
        return accumulator + element.score
    },0)

    return total/students.length;
}


const get2LowestScoringStudents = (students = [])=>{
    return students.filter(stu=>{
        return stu.score < 5
    }).slice(0,2)
}


module.exports = {averageScore, get2LowestScoringStudents}


