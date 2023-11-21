// There are many ways to solve this issue.
// The first one is to use 'for' loop.

function uniteUnique(arr) {
    const args = [...arguments];
    const result = [];
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]);
            }
        }
    }
    return result; // In case to sort them use 'sort()' method.
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// We will have to check if the current value is already on the array to be returned for every value.

function uniteUnique1(...arr) {
    return [...new Set(arr.flat())]
};

console.log(uniteUnique1([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Or as an arrow function

const uniteUnique2 = (...arr) => [...new Set(arr.flat())];

console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));