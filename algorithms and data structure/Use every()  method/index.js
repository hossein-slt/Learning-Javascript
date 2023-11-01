/*
The every method works with arrays to check if every element passes a particular test. 
It returns a Boolean value - true if all values meet the criteria, false if not.
*/
function checkpositive(arr) {
    return arr.every(val => val > 0);
}

console.log(checkpositive([1, 2, 3 -4, 5]));
////////\\\\\\\\
function checknotnegative(arr) {
    return arr.every(function(value) {
        return value > 0;
    })
}

console.log(checknotnegative([1, 2, 3, 4, 5]));

//////\\\\\\

/*
The some method works with arrays to check if any element passes a particular test. 
It returns a Boolean value - true if any of the values meet the criteria, false if not.
*/

function checkodd(arr) {
    return arr.some(val => val % 2 !== 0);
}

console.log(checkodd([2, 6, 4, 8, 12]));