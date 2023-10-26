
function getIndextoins(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length;
}

console.log(getIndextoins([30, 50, 20, 10, 70, 60,], 40));

