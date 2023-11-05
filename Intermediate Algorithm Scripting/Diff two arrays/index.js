
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
