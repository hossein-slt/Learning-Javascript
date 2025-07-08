// The code here tries to count true values in an array

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++
    return count;
}

const array = [1, 3, null, '', undefined]
console.log(countTruthy(array));
