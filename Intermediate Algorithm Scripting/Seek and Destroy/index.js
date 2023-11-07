
function destroyer(arr) {
    const valstoremove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !valstoremove.includes(val);
    })
}


console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));