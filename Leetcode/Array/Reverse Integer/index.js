
function reverse(x) {
    let reversed = parseInt(x.toString().split("").reverse().join(""));
    return (x < 0) ? -reversed : reversed;
}

console.log(reverse(987)); // expected result => 789
console.log(reverse(-123)); // expected result => -321