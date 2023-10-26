// There are two solutions.
// First one is to use 'for' loop.

function bouncer(arr) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) filteredArray.push(arr[i]);
    }
    return filteredArray;
}

console.log(bouncer([7, "ate", "", false, 9]));

// Here we can use a cleaner solution, which is filter() method.

function bouncer1(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer1([7, "ate", "", false, 9]));