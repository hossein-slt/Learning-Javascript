// Two solutions are possible
// first to use 'for' loop.

function diffarray(arr1, arr2) {
    const newarr = [];

    function onlyinfirst(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newarr.push(first[i]);
            }
        }
    }
    onlyinfirst(arr1, arr2);
    onlyinfirst(arr2, arr1);
    return newarr;
}

console.log(diffarray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Here it is possible to use chain method.

function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));