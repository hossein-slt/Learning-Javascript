/* There are 3 solutions. 
one is to use endsWith() method.which we don't want to use.
but we can use slice() which is for string.*/

function confirmending(str, target) {
    return str.slice(str.length - target.length) === target;
}

// Here is shorter solution.

function endingconfirmed(str, target) {
    return str.slice(-target.length) === target;
}

console.log(confirmending("Freecodecamp", "p"));
console.log(endingconfirmed("Freecodecamp", "mp"));
