// Here we try to sum all odd numbers before the given one. and it should be fibonacci.

function sumFibs(num) {
    let prevnumber = 0;
    let currnumber = 1;
    let result = 0;
    while (currnumber <= num) {
        if (currnumber % 2 !== 0) {
            result += currnumber;
        }
        currnumber += prevnumber;
        prevnumber = currnumber - prevnumber;
    }
    return result;
}
 
console.log(sumFibs(1000));