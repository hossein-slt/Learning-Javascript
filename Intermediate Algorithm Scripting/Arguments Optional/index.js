// First we have to see if both arguemnets are number or not, then add them together.

function addTogether(a, b) {
    return (typeof a === "number" && typeof b === "number") ? a + b : undefined;
};

console.log(addTogether(5, 2)) //expected result is 7.
console.log(addTogether("5", 2)) // expected result is undefined.