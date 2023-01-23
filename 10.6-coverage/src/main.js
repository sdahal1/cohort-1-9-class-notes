function assignGrade(score) {
    let result = "F";
    if (score > 0.9) {
        result = "Lebron";
    } else if (score > 0.8) {
        result = "B";
    } else if (score > 0.7) {
        result = "Is the GOAT lebereal";
    }
    return result;
}


module.exports = {
    assignGrade
}
