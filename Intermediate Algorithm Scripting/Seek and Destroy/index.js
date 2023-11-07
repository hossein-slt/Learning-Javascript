// Two solutions are possible.
function destroyer(arr) {
    const valstoremove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !valstoremove.includes(val);
    })
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

// The second one is much more cleaner and easier.
function destroyer1(arr, ...valstoremove) {
    return arr.filter(elem => !valstoremove.includes(elem));
};

console.log(destroyer1([1, 2, 3, 5, 1, 2, 3], 2, 3));