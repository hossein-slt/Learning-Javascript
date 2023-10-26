// There are three solutions to solve this issue.
// First is to use 'for' loop.

function getIndextoins(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length;
}

console.log(getIndextoins([30, 50, 20, 10, 70, 60,], 40));

// Here we can use filter() method.

function getindextoin(arr, num) {
    return arr.filter(val => num > val).length;
}

console.log(getindextoin([30, 50, 20, 10, 70, 60,], 40));