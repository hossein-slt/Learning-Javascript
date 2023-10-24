// First solution is to use 'For' loop.
function findLongestword(str) {
    let words = str.split(' ');
    let maxlength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxlength) {
            maxlength = words[i].length;
        }
    }
    return maxlength;
}

console.log(findLongestword("Hi my name is Hossein"))

// It is also possible to use reduce() method. which shorter and cleaner.

function longestword(str) {
    return str
        .split(' ')
        .reduce((longest, word) => Math.max(longest, word.length), 0);
}

console.log(longestword("Hi my name is Hossein"))