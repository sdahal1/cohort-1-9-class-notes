//O(1)
function O_1(n) {
    let x = 2 + 2
    return n
}
// console.log(O_1(100));
//O(logn)
function O_log_2(n) {
    count = 0;
    for (let i = 1; i < n; i = i * 2) {
        count++
    }
    return count;
}
// console.log(O_log_2(400));
//O(n)
function O_N(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        count++
    }
    return count;
}
// console.log(O_N(10000));
//O(n^2)
function O_N2(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++
        }      
    }
    return count;
}
console.log(O_N2(100000));

