// There are 3 ways to solve this issue.
// The first one is to use 'for' loop.

function uniteUniqe(arr) {
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

console.log(uniteUniqe([1, 3, 2], [5, 2, 1, 4], [2, 1]));