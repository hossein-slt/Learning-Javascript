// Three solutions is possible
// First is to use 'for' loop.

function frankenSplice(arr1, arr2, n) {
    let localarray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localarray.splice(n, 0, arr1[i]);
        n++;
    }
    return localarray;
}


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// Here we can use spread method. which is shorter and cleaner.

function franksplice(arr1, arr2, n) {
    let localarray = arr2.slice();
    localarray.splice(n, 0, ...arr1);
    return localarray;
}

console.log(franksplice([1, 2, 3], [4, 5, 6], 1));

// It is also possible not to use splice() method for shorter and cleaner.

function frankenslice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

console.log(frankenslice([1, 2, 3], [4, 5, 6], 1));