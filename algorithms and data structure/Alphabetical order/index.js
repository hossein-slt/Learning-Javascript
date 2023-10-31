
function alphabeticalorder(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });
};

console.log(alphabeticalorder(["c", "g", "z", "h", "k"]));
