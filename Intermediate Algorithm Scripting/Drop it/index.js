
function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
};

console.log(dropElements([1, 3, 5, 7, 9], function(n) {
    return n > 6
}));
