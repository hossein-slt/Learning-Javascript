
function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}

console.log(sumAll([4, 10]))